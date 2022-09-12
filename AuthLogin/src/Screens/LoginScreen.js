import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputButton from '../Components/InputButton';
import InputLogin from '../Components/InputLogin';
import SocialButton from '../Components/SocialButton';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBox}>
          <Text style={styles.topText}>Welcome!</Text>
          <Text style={styles.topTextDown}>Login and get started</Text>
        </View>
      </View>
      
        <View style={styles.LoginContainer}>
        <InputLogin placeholder="email" />
        <InputLogin placeholder="password" />
        <InputButton text="Login" />
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 16}}>
          <Text style={{color: '#6A87E8', fontSize: 12}}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.socialButton}>
          <SocialButton name="facebook" color="#474AD9" />
          <SocialButton name="google" color="#FE5E8F" />
          <SocialButton name="twitter" color="#6F8FE9" />
        </View>
        <InputButton text="Sign Up"/>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAD5E2',
  },
  topContainer: {
    flex:2,
    width: '100%',
    height: '20%',
    backgroundColor: '#fff',
    borderBottomEndRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // position:'absolute'
  },
  topBox: {
    margin: 40,
  },
  topText: {
    color: '#7492EA',
    fontSize: 24,
    fontWeight: '400',
  },
  topTextDown: {
    color: '#000',
    fontSize: 18,
  },
  LoginContainer: {
    flex:6,
    padding: 20,
    // marginTop:30,
    justifyContent:'center'
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default LoginScreen;
