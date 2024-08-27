import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

export default function TypeBar(props) {
  return (
    <View style={styles.container}>
    <Svg width="300" height="48" viewBox="0 0 300 48" fill="none" {...props}>
        <Rect x="1" y="1" width="298" height="46" rx="9" fill="#4C4C4C" stroke="white" stroke-width="2"/>
    </Svg>
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
});
