// screens/Q1.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../components/BackArrow';
import Rectangle from '../components/Rectangle';
import QueryBkg from '../components/QueryBkg';
import YesButton from '../components/YesButton';
import NoButton from '../components/NoButton';
import Svg, { Path } from 'react-native-svg';

const Q1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <QueryBkg />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('StartScreen')}
      >
        <BackArrow />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.svgContainer}>
        <Svg width="205" height="213" viewBox="0 0 205 213" fill="none">
          <Path d="M122.202 72.6663H83.1346L63.601 106.5L83.1346 140.333H122.202L141.736 106.5L122.202 72.6663Z" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M24.5337 106.5L5 140.334L24.5337 174.167H63.601L83.1347 140.334" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M63.601 174.167L83.1346 208H122.202L141.736 174.167L122.202 140.333" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M141.736 174.167H180.803L200.337 140.334L180.803 106.5H141.736" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M180.803 106.5L200.337 72.6665L180.803 38.8331H141.736L122.202 72.6665" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M141.736 38.8333L122.202 5H83.1346L63.601 38.8333L83.1346 72.6667" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M63.601 38.8331H24.5337L5 72.6665L24.5337 106.5H63.601" stroke="#FDAC05" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
      </View>

      

      <View style={styles.rectangleContainer}>
        <View style={styles.rectangleWrapper}>
          <Rectangle />
          <Text style={styles.rectangleText}>
            Todos os estágios de cria presentes {'\n'} nas quantidades adequadas ?
          </Text>
        </View>
      </View>

      <View style={styles.yesNoContainer}>
        <View style={styles.yesNoButtonWrapper}>
          <YesButton />
        </View>
        <View style={styles.buttonWrapper}>
          <NoButton />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesNoContainer: {
    flex: 1,
    flexDirection: 'row', // Align buttons horizontally
    top: 95,
    left: 4,
  },
  buttonWrapper: {
    marginHorizontal: 7, // Space between buttons
  },
  svgContainer: {
    position: 'absolute',
    top: 222, // Adjust as needed to position the SVG
    width: '50%', // Make it scalable by using percentage
    height: 'auto', // Maintain aspect ratio
    alignItems: 'center', // Center the SVG horizontally
  },
  backButton: {
    flexDirection: 'row', // Arrange the BackArrow and text horizontally
    alignItems: 'center',
    position: 'absolute',
    top: 61,
    left: 26,
  },
  backText: {
    color: 'white', // Set the text color to white
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '500', // Medium bold
    marginLeft: 14, // Space between the arrow and text
  },
  rectangleContainer: {
    flex: 1,
    width: '100%', // Ensure the container takes the full width of the screen
    alignItems: 'center', // Center the rectangle horizontally
  },
  rectangleWrapper: {
    position: 'absolute',
    width: 385,
    height: 96,
    top: 99, 
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }], // Scale the rectangle
  },
  rectangleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default Q1;
