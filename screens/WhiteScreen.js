// screens/WhiteScreen.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function WhiteScreen() {
  return (
    <View style={styles.container}>
      {/* Content for the white screen */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
