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
    <View style={styles.container}>
      <Background />
      <View style={styles.logoContainer}>
        <BigLogo />
      </View>

      {/* Typable TypeBars */}
      <View style={styles.typeBar1Container}>
        <Text style={styles.barLabel}> Usuário:</Text>
        <TypeBar value={text1} onChangeText={setText1} />
      </View>


      <View style={styles.typeBar2Container}>
        <Text style={styles.barLabel}> Senha:</Text>
        <TypeBar value={text2} onChangeText={setText2} />
      </View>

      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {/* Handle password recovery */}}>
        <Text style={styles.forgotPasswordLabel}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.entrarButtonContainer}>
        <EntrarButton onPress={() => navigation.navigate('Q1')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 132,
    left: 94,
  },
  typeBar1Container: {
    position: 'absolute',
    top: 388,
    left: 58,
  },
  typeBar2Container: {
    position: 'absolute',
    top: 480,
    left: 58,
  },
  barLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400', // Semibold font
    marginBottom: -4,
  },
  forgotPasswordButton: {
    marginTop: 280,
    paddingVertical: 10, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
  },
  forgotPasswordLabel: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '300', // Thin font
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  entrarButtonContainer: {
    position: 'absolute',
    top: 596,
    left: 122,
    marginTop: 40
  },
});
