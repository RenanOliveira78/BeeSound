// YesButton.js
import React, { useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const YesButton = ({ pressed, onPress}) => {
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


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        activeOpacity={1}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Svg
            width="208"
            height="227"
            viewBox="0 0 208 227"
            fill="none"
          >
            <Path
              d="M93.5379 12.0112C100.016 8.28908 107.984 8.28908 114.462 12.0112L183.529 51.6952C190.048 55.4407 194.067 62.3853 194.067 69.9036V149.096C194.067 156.615 190.048 163.559 183.529 167.305L114.462 206.989C107.984 210.711 100.016 210.711 93.5379 206.989L24.4713 167.305C17.9525 163.559 13.9334 156.615 13.9334 149.096V69.9036C13.9334 62.3853 17.9525 55.4407 24.4713 51.6952L93.5379 12.0112Z"
              fill={pressed ? '#47F30B' : '#6A9A5B' } // Change color when pressed
            />
            <Path
              d="M185.771 47.7934L116.704 8.10944C108.838 3.58968 99.1623 3.58968 91.2961 8.10944L22.2294 47.7934C14.3137 52.3415 9.43336 60.7743 9.43336 69.9036V149.096C9.43336 158.226 14.3137 166.658 22.2294 171.207L91.2961 210.891C99.1623 215.41 108.838 215.41 116.704 210.891L185.771 171.207C193.686 166.658 198.567 158.226 198.567 149.096V69.9036C198.567 60.7743 193.686 52.3415 185.771 47.7934Z"
              stroke="black"
              strokeWidth="9"
            />
            <Path
              d="M90.8301 134C90.2823 134.001 89.7398 133.893 89.2338 133.683C88.7277 133.474 88.2681 133.166 87.8814 132.778L71.1986 116.096C70.4266 115.312 69.9958 114.254 70 113.154C70.0043 112.054 70.4433 111 71.2214 110.221C71.9995 109.443 73.0536 109.004 74.1539 109C75.2543 108.996 76.3118 109.426 77.0959 110.198L93.7787 126.881C94.3619 127.464 94.759 128.207 94.9199 129.016C95.0808 129.825 94.9982 130.663 94.6826 131.425C94.367 132.187 93.8325 132.839 93.1468 133.297C92.4611 133.755 91.6548 134 90.8301 134Z"
              fill="black"
            />
            <Path
              d="M91.1678 134C90.3434 134 89.5376 133.755 88.8523 133.297C88.1669 132.839 87.6327 132.188 87.3173 131.427C87.0018 130.665 86.9193 129.827 87.0801 129.018C87.2408 128.21 87.6377 127.467 88.2205 126.884L129.907 85.1979C130.691 84.4263 131.748 83.9957 132.848 84C133.948 84.0043 135.001 84.4432 135.779 85.2209C136.557 85.9986 136.996 87.0521 137 88.152C137.004 89.2518 136.574 90.3087 135.802 91.0925L94.1151 132.779C93.7285 133.166 93.2691 133.474 92.7633 133.683C92.2575 133.893 91.7153 134.001 91.1678 134Z"
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

export default YesButton;
