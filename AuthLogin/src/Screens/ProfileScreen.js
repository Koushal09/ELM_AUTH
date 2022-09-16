//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Button} from 'react-native-elements';
// import { Context as AuthContext } from '../Context/AuthContext';
import { AuthContext } from '../Context/context';

const ProfileScreen = () => {
    // const {state,signout} = useContext(AuthContext);
    const {signOut} = useContext(AuthContext)
    return (
        <View style={styles.container}>
           <Image style={{ width:60, height:60, resizeMode:'contain' }}
           source={require('../Assets/default.png')}
           />
           <Text>KOUSHAL BARICK</Text>
           {/* <Text>{state.email}</Text> */}

           <Button  title="LOGOUT" type="clear"  onPress={()=>{signOut()}}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});


export default ProfileScreen;
