// screens/Map.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import MapSearchBar from '../components/MapSearchBar';
import HiveLocation from '../components/HiveLocation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'; 

const INITIAL_REGION = {
  latitude: -3.744980,
  longitude: -38.574230,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
}

export default function Map() {

    const navigation = useNavigation(); 
    // Vector of objects(hives)
    const locations = [
      { id: 1, latitude: -3.7427479332184883, longitude: -38.572757891503485 }, 
      { id: 2, latitude: -3.7432055848289423, longitude: -38.57285170215977 }, 
      { id: 3, latitude: -3.7442457012359616, longitude: -38.571517506159324 },
      { id: 4, latitude: -3.74824570, longitude: -38.573517506 }, 

    ];

    const handleMarkerPress = (id) => {
      navigation.navigate('AudioStandBy');
    };
  
  
  return (
    <View style={styles.container}>
        <MapView 
          style={StyleSheet.absoluteFill} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
        >

        {locations.map((location) => (
                  <Marker
                    key={location.id}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    onPress={() => handleMarkerPress(location.id)} // Handle press here
                  >
                    <HiveLocation />
                  </Marker>
                ))}
        </MapView>

        <MapSearchBar navigation={navigation}/>


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
