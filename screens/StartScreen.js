// screens/StartScreen.js
import React, { useState } from 'react'; // Import useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BigLogo from '../components/BigLogo';
import Background from '../components/Background';
import TypeBar from '../components/TypeBar';
import EntrarButton from '../components/EntrarButton';

export default function StartScreen({ navigation }) {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={styles.Container}>
      <Background />
      <View style={styles.LogoContainer}>
        <BigLogo />
      </View>

      {/* Typable TypeBars */}
      <View style={styles.TypeBar1Container}>
        <Text style={styles.BarLabel}> Usuário:</Text>
        <TypeBar value={text1} onChangeText={setText1} />
      </View>


      <View style={styles.TypeBar2Container}>
        <Text style={styles.BarLabel}> Senha:</Text>
        <TypeBar value={text2} onChangeText={setText2} />
      </View>

      <TouchableOpacity style={styles.ForgotPasswordButton} onPress={() => {/* Handle password recovery */}}>
        <Text style={styles.ForgotPasswordLabel}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.EntrarButtonContainer}>
        <EntrarButton onPress={() => navigation.navigate('WhiteScreen')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoContainer: {
    position: 'absolute',
    top: 132,
    left: 94,
  },
  TypeBar1Container: {
    position: 'absolute',
    top: 388,
    left: 58,
  },
  TypeBar2Container: {
    position: 'absolute',
    top: 480,
    left: 58,
  },
  BarLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400', // Semibold font
    marginBottom: -4,
  },
  ForgotPasswordButton: {
    marginTop: 280,
    paddingVertical: 10, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
  },
  ForgotPasswordLabel: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '300', // Thin font
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  EntrarButtonContainer: {
    position: 'absolute',
    top: 596,
    left: 122,
    marginTop: 40
  },
});
