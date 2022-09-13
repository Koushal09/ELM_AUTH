//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import { Context as AuthContext } from './src/Context/AuthContext';

const Stack = createNativeStackNavigator();

// create a component
const App = () => {
  const {state} = React.useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {state.token === null ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ):
       ( <Stack.Screen name="Profile" component={ProfileScreen} />)
      }
      </Stack.Navigator>
    </NavigationContainer>
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
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
