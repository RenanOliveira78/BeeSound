// screens/AudioStandBy.js
import React, { useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../components/BackArrow';
import MicButton from '../components/MicButton';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

const AudioStandBy = () => {
  const navigation = useNavigation();

  const [recording, setRecording] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState('idle');
  const [audioPermission, setAudioPermission] = useState(null);

  useEffect(() => {

    // Simply get recording permission upon first render
    async function getPermission() {
      await Audio.requestPermissionsAsync().then((permission) => {
        console.log('Permission Granted: ' + permission.granted);
        setAudioPermission(permission.granted)
      }).catch(error => {
        console.log(error);
      });
    }

    // Call function to get permission
    getPermission()
    // Cleanup upon first render
    return () => {
      if (recording) {
        stopRecording();
      }
    };
  }, []);

  async function startRecording() {
    try {
      // needed for IoS
      if (audioPermission) {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        })
      }

      const newRecording = new Audio.Recording();
      console.log('Starting Recording')
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      setRecording(newRecording);
      setRecordingStatus('recording');

    } catch (error) {
      console.error('Failed to start recording', error);
    }
  }



async function stopRecording() {
  try {
    if (recordingStatus === 'recording') {
      console.log('Stopping Recording');
      await recording.stopAndUnloadAsync();
      const recordingUri = recording.getURI();

      // Create a file name for the recording
      const fileName = `recording-${Date.now()}.caf`;

      // Path for saving inside emulator (you'll pull this later using adb or Android Studio)
      const filePath = `${FileSystem.documentDirectory}recordings/${fileName}`;

      // Ensure the recordings folder exists
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });

      // Move the recording to the new file path
      await FileSystem.moveAsync({
        from: recordingUri,
        to: filePath,
      });

      console.log('File saved to:', filePath); // Log the saved path for adb or Android Studio pull

      // Optional: Playback the sound to verify it's saved properly
      const playbackObject = new Audio.Sound();
      await playbackObject.loadAsync({ uri: filePath });
      await playbackObject.playAsync();

      // Reset state for a new recording
      setRecording(null);
      setRecordingStatus('stopped');
    }
  } catch (error) {
    console.error('Failed to stop recording', error);
  }
}


  async function handleRecordButtonPress() {
    if (recording) {
      const audioUri = await stopRecording(recording);
      if (audioUri) {
        console.log('Saved audio file to', savedUri);
      }
    } else {
      await startRecording();
    }
  }


  
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
        <TouchableOpacity onPress={handleRecordButtonPress}>
          <MicButton />
        </TouchableOpacity>
        <Text>{`Recording status: ${recordingStatus}`}</Text>
      </View>

      <Text style={styles.bottomText}>aperte para escutar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626', 
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
