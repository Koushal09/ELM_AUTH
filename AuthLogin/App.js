//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';


// create a component
const App = () => {
  return (
    <ProfileScreen/>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
