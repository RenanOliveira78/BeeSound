// screens/Map.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import MapSearchBar from '../components/MapSearchBar';
import HiveLocation from '../components/HiveLocation';

export default function Map() {
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
