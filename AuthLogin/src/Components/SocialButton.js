//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// create a component
const SocialButton = (props) => {
    return (
        <View style={styles.container}>
           <FontAwesome 
           name={props.name}
           size={20}
           color={props.color}
           />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:10,
        borderRadius:10,
        width:40,
        height:40
    },
});

//make this component available to the app
export default SocialButton;
