// AppNavigator.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import WhiteScreen from './screens/WhiteScreen'; 
import StartScreen from './screens/StartScreen';
import Q1 from './screens/Q1';
import FormList from './screens/FormList';
import Profile from './screens/Profile';
import Map from './screens/Map';
import AudioStandBy from './screens/AudioStandBy';
import DisplayForms from './screens/DisplayForms';

const Stack = createStackNavigator();

const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        StartScreen: 'start',
        WhiteScreen: 'white',
        Q1: 'Q1',
        FormList: 'formlist',
        Profile: 'profile',
        Map: 'Map',
      },
    },
  };

  function AppNavigator() {
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator>

          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ headerShown: false }} // Hide header for StartScreen
          />

          <Stack.Screen
            name="Map"
            component={Map}
            options={{ headerShown: false }} // Show header (back arrow) for WhiteScreen
          />

          <Stack.Screen
            name="AudioStandBy"
            component={AudioStandBy}
            options={{ headerShown: false }} // Show header (back arrow) for WhiteScreen
          />

          <Stack.Screen
            name="WhiteScreen"
            component={WhiteScreen}
            options={{ headerShown: true }} // Show header (back arrow) for WhiteScreen
          />
          <Stack.Screen
            name="Q1"
            component={Q1}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="FormList"
            component={FormList}
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="DisplayForms"
            component={DisplayForms}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default AppNavigator;
