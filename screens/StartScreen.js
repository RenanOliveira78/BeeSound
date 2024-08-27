// screens/StartScreen.js
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BigLogo from '../components/BigLogo';
import Background from '../components/Background';
import TypeBar from '../components/TypeBar';
import EntrarButton from '../components/EntrarButton';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.logoContainer}>
        <BigLogo />
      </View>
      <View style={styles.TypeBar1Container}>
        <TypeBar />
      </View>
      <View style={styles.TypeBar2Container}>
        <TypeBar />
      </View>
      <View style={styles.EntrarButtonContainer}>
        <EntrarButton onPress={() => navigation.navigate('WhiteScreen')} />
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
  EntrarButtonContainer: {
    position: 'absolute',
    top: 596,
    left: 122,
  },
});
