// components/SearchBar.js
import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { StyleSheet, View, TextInput } from 'react-native';

export default function SearchBar(props) {
    return (
        <View style={styles.container}>
        <Svg width="316" height="45" viewBox="0 0 316 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="316" height="44.8" rx="22.4" fill="white"/>
        </Svg>
        <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#888"
            style={styles.input}
            {...props}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        position: 'absolute',
        width: '90%',
        height: '70%',
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 10,
    },
});