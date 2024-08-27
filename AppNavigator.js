// AppNavigator.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import WhiteScreen from './screens/WhiteScreen'; 
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();

const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        StartScreen: 'start',
        WhiteScreen: 'white',
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
            name="WhiteScreen"
            component={WhiteScreen}
            options={{ headerShown: true }} // Show header (back arrow) for WhiteScreen
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default AppNavigator;
