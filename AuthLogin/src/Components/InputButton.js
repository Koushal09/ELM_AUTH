//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const InputButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{ color:'#fff' }} >InputButton</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#596BE1',
        width:'90%',
        height:40,
        alignSelf:'center',
        borderRadius:50,
        marginTop:20

    },
});

//make this component available to the app
export default InputButton;
