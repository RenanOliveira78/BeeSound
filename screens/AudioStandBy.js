// screens/AudioStandBy.js
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../components/BackArrow';
import MicButton from '../components/MicButton';

const AudioStandBy = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Map')} // Navigate to Map screen
      >
        <BackArrow />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.micButtonContainer}>
        <MicButton />
      </View>

      <Text style={styles.bottomText}>aperte para escutar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626', // Set background color to white
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
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
  bottomText: {
    position: 'absolute',
    bottom: 52, // Adjust the distance from the bottom as needed
    color: '#888', // Thin grey color
    fontSize: 24, // Adjust the font size as needed
    fontWeight: '300', // Thin font weight
  },
  micButtonContainer: {
    position: 'absolute',
    bottom: 220, // Adjust the distance from the bottom
    alignSelf: 'center', // Center horizontally
  },
});

export default AudioStandBy;
