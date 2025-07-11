import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const ButtonIconDash = () => (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path d="M1.77778 17.7778H12.4444C13.4222 17.7778 14.2222 16.9778 14.2222 16V1.77778C14.2222 0.8 13.4222 0 12.4444 0H1.77778C0.8 0 0 0.8 0 1.77778V16C0 16.9778 0.8 17.7778 1.77778 17.7778ZM1.77778 32H12.4444C13.4222 32 14.2222 31.2 14.2222 30.2222V23.1111C14.2222 22.1333 13.4222 21.3333 12.4444 21.3333H1.77778C0.8 21.3333 0 22.1333 0 23.1111V30.2222C0 31.2 0.8 32 1.77778 32ZM19.5556 32H30.2222C31.2 32 32 31.2 32 30.2222V16C32 15.0222 31.2 14.2222 30.2222 14.2222H19.5556C18.5778 14.2222 17.7778 15.0222 17.7778 16V30.2222C17.7778 31.2 18.5778 32 19.5556 32ZM17.7778 1.77778V8.88889C17.7778 9.86667 18.5778 10.6667 19.5556 10.6667H30.2222C31.2 10.6667 32 9.86667 32 8.88889V1.77778C32 0.8 31.2 0 30.2222 0H19.5556C18.5778 0 17.7778 0.8 17.7778 1.77778Z" fill="black"/>
    </Svg>
);

const ButtonIconMap = () => (
    <Svg width="35" height="31" viewBox="0 0 35 31" fill="none">
      <Path d="M33.421 3.62662L23.171 0.209951H23.0514C22.9719 0.201958 22.8918 0.201958 22.8123 0.209951H22.4194H22.1973H22.0777L12.3744 3.5412L2.67102 0.209951C2.41411 0.125237 2.14076 0.102745 1.87346 0.144325C1.60616 0.185905 1.35256 0.290368 1.13352 0.449118C0.912734 0.606312 0.732516 0.813783 0.607756 1.05439C0.482996 1.295 0.417275 1.56184 0.416021 1.83287V25.7495C0.415097 26.1077 0.526754 26.4571 0.73521 26.7483C0.943666 27.0395 1.23838 27.2578 1.57769 27.3725L11.8277 30.7891C12.1718 30.9013 12.5427 30.9013 12.8869 30.7891L22.6244 27.5433L32.3277 30.8745C32.5091 30.8991 32.693 30.8991 32.8744 30.8745C33.2315 30.8796 33.5802 30.7653 33.8652 30.55C34.086 30.3928 34.2662 30.1853 34.391 29.9447C34.5157 29.7041 34.5814 29.4372 34.5827 29.1662V5.24953C34.5836 4.89139 34.472 4.54202 34.2635 4.25079C34.055 3.95957 33.7603 3.74122 33.421 3.62662ZM10.666 26.7916L3.83269 24.5195V4.20745L10.666 6.47953V26.7916ZM20.916 24.5195L14.0827 26.7916V6.47953L20.916 4.20745V24.5195ZM31.166 26.7916L24.3327 24.5195V4.20745L31.166 6.47953V26.7916Z" fill="black"/>
    </Svg>
  );

const ButtonIconSettings = () => (
<Svg width="32" height="8" viewBox="0 0 32 8" fill="none">
    <Path d="M16.0004 9.88416e-08C15.4978 8.82533e-08 15.0001 0.0989646 14.5357 0.291243C14.0713 0.483522 13.6494 0.76535 13.294 1.12064C12.9386 1.47592 12.6566 1.8977 12.4643 2.36191C12.2719 2.82611 12.1729 3.32364 12.1729 3.82609C12.1729 4.32854 12.2719 4.82607 12.4643 5.29027C12.6566 5.75447 12.9386 6.17625 13.294 6.53154C13.6494 6.88682 14.0713 7.16865 14.5357 7.36093C15.0001 7.55321 15.4978 7.65217 16.0004 7.65217C17.0156 7.65194 17.989 7.24862 18.7066 6.53093C19.4243 5.81323 19.8273 4.83996 19.8271 3.82522C19.8268 2.81048 19.4234 1.83739 18.7054 1.12002C17.9874 0.402653 17.0138 -0.000230389 15.9987 9.88416e-08H16.0004ZM3.82751 9.88416e-08C3.32488 8.82533e-08 2.82716 0.0989646 2.36279 0.291243C1.89841 0.483522 1.47647 0.76535 1.12105 1.12064C0.765635 1.47592 0.483703 1.8977 0.291352 2.36191C0.0990016 2.82611 0 3.32364 0 3.82609C0 4.32854 0.0990016 4.82607 0.291352 5.29027C0.483703 5.75447 0.765635 6.17625 1.12105 6.53154C1.47647 6.88682 1.89841 7.16865 2.36279 7.36093C2.82716 7.55321 3.32488 7.65217 3.82751 7.65217C4.84263 7.65194 5.81609 7.24862 6.53372 6.53093C7.25136 5.81323 7.65439 4.83996 7.65416 3.82522C7.65393 2.81048 7.25045 1.83739 6.53249 1.12002C5.81453 0.402653 4.84263 -0.000230389 3.82751 9.88416e-08ZM28.1734 9.88416e-08C27.6707 8.82533e-08 27.173 0.0989646 26.7086 0.291243C26.2443 0.483522 25.8223 0.76535 25.4669 1.12064C25.1115 1.47592 24.8295 1.8977 24.6372 2.36191C24.4448 2.82611 24.3458 3.32364 24.3458 3.82609C24.3458 4.32854 24.4448 4.82607 24.6372 5.29027C24.8295 5.75447 25.1115 6.17625 25.4669 6.53154C25.8223 6.88682 26.2443 7.16865 26.7086 7.36093C27.173 7.55321 27.6707 7.65217 28.1734 7.65217C29.1885 7.65194 30.1619 7.24862 30.8796 6.53093C31.5972 5.81323 32.0002 4.83996 32 3.82522C31.9998 2.81048 31.5963 1.83739 30.8783 1.12002C30.1604 0.402653 29.1885 -0.000230389 28.1734 9.88416e-08Z" fill="black"/>
</Svg>
);

const IndicatorSvg = () => (
<Svg width="74" height="70" viewBox="0 0 74 70" fill="none">
    <Rect width="74" height="70" rx="35" fill="white"/>
</Svg>
);

const NavBar = () => {

  // Create an animated value to track the position of the indicator
  const [indicatorPosition] = useState(new Animated.Value(0));

  const buttonWidth = 32; // Width of the button
  const spaceBetweenButtons = 45; // Space between buttons
  const middleButtonIndex = 1; // Index of the button that starts in the middle
  const screenWidth = Dimensions.get('window').width;
  const indicatorWidth = 74; // Width of the indicator

  const animateIndicator = (toValue) => {
    Animated.timing(indicatorPosition, {
      toValue,
      duration: 240, // Duration of the animation
      useNativeDriver: false,
    }).start();
  };

  const handleButtonPress = (index) => {
    const buttonOffset = (index - middleButtonIndex) * (buttonWidth + spaceBetweenButtons);
    const newPosition = (screenWidth / 2 - indicatorWidth / 2) + buttonOffset;
    animateIndicator(newPosition);
  };

  useEffect(() => {
    // Set the initial position of the indicator to the middle button
    handleButtonPress(1);
  }, []);

  return (
    <View style={styles.container}>
      {/* SVG Background for NavBar */}
      <View style={styles.navBarBackground}>
        <Svg width="257" height="82" viewBox="0 0 257 82" fill="none">
          <Rect x="4" width="249" height="82" rx="36" fill="#ECECEC" fillOpacity="0.5" />
          <Rect x="4.25" y="0.25" width="248.5" height="81.5" rx="35.75" stroke="black" strokeOpacity="0.25" strokeWidth="0.5" />
        </Svg>
      </View>

      {/* Animated Indicator */}
      <Animated.View style={[styles.indicator, { transform: [{ translateX: indicatorPosition }] }]}>
        <IndicatorSvg />
      </Animated.View>

      {/* Buttons inside the NavBar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(0)}>
          <ButtonIconDash />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
          <ButtonIconMap />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
          <ButtonIconSettings />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 26,
    width: '100%',
    alignItems: 'center',
  },
  navBarBackground: {
    position: 'absolute',
    bottom: 0, 
    width: '90%',
    height: 82,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    width: '50%',  
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,  
    paddingHorizontal: 0,  
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    left: -0,
    bottom: 6,
    width: 74,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavBar;
