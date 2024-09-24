// screens/FormList.js
import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import BackArrow from "../components/BackArrow";
import Background from "../components/Background";
import SearchBar from "../components/SearchBar";
import FormButton from "../components/FormButton";

export default function FormList({ navigation }) {
    const [searchText, setSearchText] = useState('');

    const formData = [
        { key: 0, dateText: '13/11/2021 11:24:21', syncText: 'Rainha Presente', queenStatus: true},
        { key: 1, dateText: '14/11/2021 12:30:45', syncText: 'Rainha Ausente', queenStatus: false},
        { key: 2, dateText: '15/11/2021 13:45:00', syncText: 'Rainha Ausente', queenStatus: false},
        { key: 3, dateText: '20/11/2021 15:53:00', syncText: 'Rainha Presente', queenStatus: true},
        { key: 4, dateText: '22/11/2021 06:12:00', syncText: 'Rainha Presente', queenStatus: true},
    ];

    return (
        <View style={styles.container}>
            <Background />

            <View style={styles.topHeader}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <BackArrow />
                </TouchableOpacity>
                <View style={styles.searchBarContainer}>
                    <SearchBar 
                    value={searchText}
                    onChangeText={setSearchText}
                    onPress={() => navigation.navigate('DisplayForms')}
                    />
                    <TouchableOpacity>
                        <Ionicons 
                            name="person-circle-outline"
                            size={30} color="#9B51E0"
                            style={styles.profileIcon}
                            onPress={() => navigation.navigate('Profile')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {formData.map((item) => (
                    <View style={styles.buttonContainer}>
                        <FormButton 
                        key={item.key} 
                        dateText={item.dateText} 
                        syncText={item.syncText} 
                        queenStatus={item.queenStatus}
                        onPress={() => navigation.navigate('DisplayForms', { dateText: item.dateText, key: item.key })}
                    /> 
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 80,
    },
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 35,
        width: '100%',
        zIndex: 1,
    },
    backButton: {
        marginRight: 5,
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    profileIcon: {
        marginLeft: -50,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 20,
    },
    text: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 10,
    }
});
