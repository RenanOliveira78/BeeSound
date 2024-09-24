// screens/Profile.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';

import Background from "../components/Background";
import BackArrow from "../components/BackArrow";

export default function Profile({ navigation }) {
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
                <Text style={styles.topText}> Profile</Text>
                <View style={styles.topBell}>
                    <Svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M12.571 5.05206C13.0741 5.05206 14.2692 5.3643 14.2692 5.3643C17.5071 6.09258 19.7861 9.01991 19.7861 12.325V21.221L20.4482 21.8738L21.0013 22.4192H3.99872L4.55185 21.8738L5.21385 21.221V12.325C5.21385 9.01998 7.4929 6.09258 10.7308 5.3643C10.7308 5.3643 12.0122 5.05206 12.429 5.05206M12.5 0C11.2499 0 10.2941 0.94236 10.2941 2.175V3.18993C6.1027 4.13264 2.94112 7.9025 2.94112 12.325V20.3L0 23.2V24.65H25V23.2L22.0589 20.3V12.325C22.0589 7.9025 18.8972 4.13264 14.7059 3.18993V2.175C14.7059 0.94236 13.7501 0 12.5 0ZM15.4411 26.1H9.55881C9.55881 27.6951 10.8822 29 12.5 29C14.1178 29 15.4411 27.6951 15.4411 26.1Z" fill="white"/>
                    </Svg>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                    <MaterialIcons name="person" size={60} color="#BDBDBD" />
                    </View>
                    <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>CARLOS VICTOR</Text>
                    <TouchableOpacity>
                        <Text style={styles.profileDetails}>Mostrar dados da conta</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Idiomas</Text>
                    <MaterialIcons name="navigate-next" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Privacidade e segurança</Text>
                    <MaterialIcons name="navigate-next" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.goBack()}>
                    <Text style={styles.menuText}>Sair</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        top: 35,
    },
    backButton: {
        marginRight: 130,
    },
    topText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    topBell: {
        marginLeft: 130,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    profileIcon: {
        marginRight: 16,
        backgroundColor: '#3F3F3F',
        padding: 10,
        borderRadius: 50,
    },
    profileInfo: {
        flexDirection: 'column',
    },
    profileName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    profileDetails: {
        color: '#BDBDBD',
        fontSize: 14,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomColor: '#3F3F3F',
        borderBottomWidth: 1,
    },
    menuText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#3F3F3F',
        marginVertical: 16,
    },    
});