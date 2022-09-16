//import liraries
import React, {useEffect, useState,useMemo} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './src/Context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer =(prevState, action)=>{
switch(action.type){
  case 'RETRIVE_TOKEN':
    return{
      ...prevState,
      userToken:action.token,
      isLoading:false
    };
    case 'LOGIN':
    return{
      ...prevState,
      userToken:action.token,
      userName:action.id,
      isLoading:false
    };
    case 'LOGOUT':
    return{
      ...prevState,
      userToken:null,
      userName:null,
      isLoading:false
    };
    case 'REGISTER':
    return{
      ...prevState,
      userToken:action.token,
      userName:action.id,
      isLoading:false
    };
}
  }

  const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState); 

  const authContext = useMemo(() => ({
    signIn: async(userName, password) => {
      // setUserToken('kous');
      // setIsLoading(false);
      let userToken;
      userToken=null;
      
if( userName== 'user' && password == 'pass' ){
  try{
  userToken = 'koushal'
  await AsyncStorage.setItem('userToken', userToken)
  }catch(e){
    console.log(e)
  }
}
console.log('user token' , userToken)
dispatch({ type:'LOGIN', id:userName, token: userToken });

    },
      signOut:async() => {
        // setUserToken(null);
        // setIsLoading(false);
        try{
          await AsyncStorage.removeItem('userToken')
        }catch(e){
          console.log(e)
        }
        dispatch({ type:'LOGOUT' });
      },
      signUp:() => {
        setUserToken('kous');
        setIsLoading(false);
      }
  }),[]);

  useEffect(() => {
    setTimeout(async() => {
      // loginState.setIsLoading(false);
      let userToken;
      userToken=null;
      try{
        userToken =  await AsyncStorage.getItem('userToken')
       
        }catch(e){
          console.log(e)
        }
      // console.log('user token' , userToken) 
      dispatch({ type:'RETRIVE_TOKEN',  token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return(
  <AuthContext.Provider value={authContext}>
    {loginState.userToken!== null ?
    <ProfileScreen /> :
    <LoginScreen />
    }
    
  </AuthContext.Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default App;
