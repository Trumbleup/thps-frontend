import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './navigation/DrawerNavigator';
import { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  if (!signedIn) {
    return <LoginScreen setSignedIn={setSignedIn}/>
  } else {
      return (
        <NavigationContainer>
          <DrawerNavigator setSignedIn={setSignedIn}/>
        </NavigationContainer>
      )
  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
