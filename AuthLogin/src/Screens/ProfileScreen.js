//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// create a component
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
           <Image style={{ width:60, height:60, resizeMode:'contain' }}
           source={require('../Assets/default.png')}
           />
           <Text>KOUSHAL BARICK</Text>
           <Text>koushal@elearnmarkets.com</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ProfileScreen;
