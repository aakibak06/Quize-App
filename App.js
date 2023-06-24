import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './src/screens/Home';
import PlayGround from './src/screens/PlayGround';






export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="PlayGround" component={PlayGround} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

