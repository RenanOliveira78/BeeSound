// screens/Map.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import MapSearchBar from '../components/MapSearchBar';
import HiveLocation from '../components/HiveLocation';

export default function Map() {
    // Vector of objects(hives)
    const locations = [
      { id: 1, latitude: -3.7427479332184883, longitude: -38.572757891503485 }, 
      { id: 2, latitude: -3.7432055848289423, longitude: -38.57285170215977 }, 
      { id: 3, latitude: -3.7442457012359616, longitude: -38.571517506159324 }, 
    ];
  
  return (
    <View style={styles.container}>
        <MapSearchBar />
        <HiveLocation />
        <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
