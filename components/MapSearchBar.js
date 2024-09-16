// MapSearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const MiniLogo = () => (
    <Svg width="43" height="30" viewBox="0 0 43 30" fill="none">
      <Circle cx="1.43335" cy="14.887" r="1.43335" fill="#262626"/>
      <Rect x="4.19031" y="11.2468" width="3.30774" height="7.27703" rx="1.65387" fill="#FDAC05"/>
      <Rect x="39.6926" y="11.245" width="3.30774" height="7.27703" rx="1.65387" fill="#262626"/>
      <Rect x="8.82019" y="7.49789" width="3.08722" height="14.7746" rx="1.54361" fill="#262626"/>
      <Rect x="26.4606" y="7.49789" width="3.08722" height="14.7746" rx="1.54361" fill="#262626"/>
      <Rect x="35.2808" y="7.49789" width="3.08722" height="14.7746" rx="1.54361" fill="#262626"/>
      <Rect x="13.2303" y="3.74895" width="3.08722" height="22.0516" rx="1.54361" fill="#FDAC05"/>
      <Rect x="22.0505" y="3.74895" width="3.08722" height="22.0516" rx="1.54361" fill="#FDAC05"/>
      <Rect x="30.8707" y="3.74895" width="3.08722" height="22.0516" rx="1.54361" fill="#262626"/>
      <Rect x="17.6404" y="7.62939e-06" width="3.08722" height="29.5492" rx="1.54361" fill="#262626"/>
    </Svg>
  );

const MiniAvatar = () => (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Rect y="6.67572e-06" width="32" height="32" rx="16" fill="#EADDFF"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M20.8002 12.8C20.8002 15.451 18.6512 17.6 16.0002 17.6C13.3492 17.6 11.2002 15.451 11.2002 12.8C11.2002 10.149 13.3492 8.00001 16.0002 8.00001C18.6512 8.00001 20.8002 10.149 20.8002 12.8ZM19.2002 12.8C19.2002 14.5673 17.7675 16 16.0002 16C14.2329 16 12.8002 14.5673 12.8002 12.8C12.8002 11.0327 14.2329 9.60001 16.0002 9.60001C17.7675 9.60001 19.2002 11.0327 19.2002 12.8Z" fill="#21005D"/>
        <Path d="M16.0002 20C10.8207 20 6.40761 23.0627 4.72656 27.3536C5.13608 27.7603 5.56747 28.1449 6.01883 28.5057C7.27062 24.5662 11.1976 21.6 16.0002 21.6C20.8028 21.6 24.7298 24.5662 25.9816 28.5057C26.4329 28.1449 26.8643 27.7603 27.2738 27.3537C25.5928 23.0627 21.1797 20 16.0002 20Z" fill="#21005D"/>
    </Svg>
);

const MapSearchBar = () => {
  return (
    <View style={styles.container}>
      <Svg width="395" height="56" viewBox="0 0 395 56" fill="none">
        <Rect x="0" y="0" width="395" height="56" rx="28" fill="white" />
      </Svg>

      <View style={styles.innerContainer}>
        <MiniLogo style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#888"
        />
        <MiniAvatar style={styles.rightIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 42,
      left: 0,
      right: 0,
      height: 56,
      alignItems: 'center',
      zIndex: 1,
    },
    innerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    logo: {
      marginRight: 8, // Space between logo and input
    },
    input: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 18,
      fontSize: 16,
    },
    rightIcon: {
        marginLeft: 8, // Space between input and right icon
      },
  });

export default MapSearchBar;
