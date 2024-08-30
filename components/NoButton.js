// NoButton.js
import React, { useState, useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PressableSvgButton = () => {
  const [pressed, setPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        activeOpacity={1}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Svg width="208" height="227" viewBox="0 0 208 227" fill="none" >
                <Path
                d="M93.5379 12.0112C100.016 8.28908 107.984 8.28908 114.462 12.0112L183.529 51.6952C190.048 55.4407 194.067 62.3853 194.067 69.9036V149.096C194.067 156.615 190.048 163.559 183.529 167.305L114.462 206.989C107.984 210.711 100.016 210.711 93.5379 206.989L24.4713 167.305C17.9525 163.559 13.9334 156.615 13.9334 149.096V69.9036C13.9334 62.3853 17.9525 55.4407 24.4713 51.6952L93.5379 12.0112Z"
                fill={pressed ? '#D44C4C' : '#FE2323'} // Change color when pressed"
                />
                <Path
                d="M185.771 47.7934L116.704 8.10944C108.838 3.58968 99.1623 3.58968 91.2961 8.10944L22.2294 47.7934C14.3137 52.3415 9.43336 60.7743 9.43336 69.9036V149.096C9.43336 158.226 14.3137 166.658 22.2294 171.207L91.2961 210.891C99.1623 215.41 108.838 215.41 116.704 210.891L185.771 171.207C193.686 166.658 198.567 158.226 198.567 149.096V69.9036C198.567 60.7743 193.686 52.3415 185.771 47.7934Z"
                stroke="black"
                strokeWidth="9"
                />
                <Path
                d="M83.1678 134C82.3434 134 81.5376 133.755 80.8523 133.297C80.1669 132.839 79.6327 132.188 79.3173 131.427C79.0018 130.665 78.9193 129.827 79.0801 129.018C79.2408 128.21 79.6377 127.467 80.2205 126.884L121.907 85.1979C122.691 84.4263 123.748 83.9957 124.848 84C125.948 84.0043 127.001 84.4432 127.779 85.2209C128.557 85.9986 128.996 87.0521 129 88.152C129.004 89.2518 128.574 90.3087 127.802 91.0925L86.1151 132.779C85.7285 133.166 85.2691 133.474 84.7633 133.683C84.2575 133.893 83.7153 134.001 83.1678 134Z"
                fill="black"
                />
                <Path
                d="M79 88.1678C79.0002 87.3434 79.2448 86.5376 79.7028 85.8523C80.1609 85.1669 80.8119 84.6327 81.5735 84.3173C82.3351 84.0018 83.1731 83.9193 83.9816 84.0801C84.7902 84.2408 85.5329 84.6377 86.1159 85.2205L127.802 126.907C128.574 127.691 129.004 128.748 129 129.848C128.996 130.948 128.557 132.001 127.779 132.779C127.001 133.557 125.948 133.996 124.848 134C123.748 134.004 122.691 133.574 121.908 132.802L80.2213 91.1151C79.8336 90.7285 79.5261 90.2691 79.3165 89.7633C79.1069 89.2575 78.9994 88.7153 79 88.1678Z"
                fill="black"
                />
            </Svg>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
    },
    button: {
      marginBottom: 20, // Space between buttons if stacked vertically
    },
  });

export default PressableSvgButton;
