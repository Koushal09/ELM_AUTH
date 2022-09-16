import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import InputButton from '../Components/InputButton';
import InputLogin from '../Components/InputLogin';
import SocialButton from '../Components/SocialButton';
// import { AuthContext } from '../Context/context';
import { AuthContext } from '../Context/context';

const LoginScreen = () => {

const [data,setData] = React.useState({
  username:'',
  password:'',
  check_textInputChange:false,
  secureTextEntry:true
})

const {signIn} = React.useContext(AuthContext)

const textInputChange = (val)=>{
  if(val.length !== 0){
    setData({
      ...data,
      username:val,
      check_textInputChange:true
    });
  } else{
    setData({
      ...data,
      username:val,
      check_textInputChange:false
    })
  }
}

const handlePasswordChange=(val)=>{
setData({
  ...data,
  password:val
})
}

const updateSecureTextEntry=()=>{
  setData({
    ...data,
    secureTextEntry: !data.secureTextEntry
  })
}

const loginHandle=(username,password)=>{
  signIn(username,password)
}

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBox}>
          <Text style={styles.topText}>Welcome!</Text>
          <Text style={styles.topTextDown}>Login and get started</Text>
        </View>
      </View>
      
        <View style={styles.LoginContainer}>
        {/* <InputLogin placeholder="email" />
        <InputLogin placeholder="password" /> */}
        <TextInput
        placeholder='Your Username'
        style={styles.input}
        autoCapitalize='none'
        onChangeText={(val)=>textInputChange(val)}
        />
        <TextInput
        placeholder='Your Password'
        secureTextEntry={data.secureTextEntry?true:false}
        style={styles.input}
        autoCapitalize='none'
        onChangeText={(val)=>handlePasswordChange(val)}
        />
        <InputButton onPress={()=>{loginHandle(data.username, data.password)}} text="Login" />
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 16}}>
          <Text style={{color: '#6A87E8', fontSize: 12}}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.socialButton}>
          <SocialButton name="facebook" color="#474AD9" />
          <SocialButton name="google" color="#FE5E8F" />
          <SocialButton name="twitter" color="#6F8FE9" />
        </View>
        <InputButton  text="Sign Up"/>
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
  input: {
    width:'90%',
  height: 40,
  margin: 12,
  borderWidth: 1,
//   padding: 10,
  borderRadius:50,
  alignSelf:'center',
  borderColor:'#7F83E3',
  backgroundColor:'#fff',
  color:'#000',
  paddingLeft:10
},
});

export default LoginScreen;


// import React, {useState, useContext} from 'react';
// import {Icon} from 'react-native-elements';
// import {View, Text, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
// import {Input, Button} from 'react-native-elements';
// // import {Context as AuthContext} from '../context/AuthContext';
// // import { Context as AuthContext } from '../Context/AuthContext';

// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const {state, signin} = useContext(AuthContext);

//   return (
//     <View style={styles.master}>
//       <Text style={styles.header}>Auth Demo</Text>
//       <TextInput
//         placeholder="Email"
//         onChangeText={setEmail}
//         value={email}
//         style={styles.input}
//         // leftIcon={<Icon name="envelope" type="font-awesome" size={24} />}
//       />
//       <TextInput
//         placeholder="Password"
//         onChangeText={setPassword}
//         value={password}
//         style={styles.input}
//         // leftIcon={<Icon name="key" type="font-awesome" size={24} />}
//         secureTextEntry
//       />
//       <Button
//         title="Login"
//         type="clear"
//         // onPress={() => {
//         //   signin({email, password});
//         // }}
//       />
//       <View style={styles.link}>
//         <Text style={styles.text}>Dont have an account? </Text>
//         <TouchableOpacity onPress={() => {}}>
//           <Text style={styles.text}>Sign up Here.</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   master: {
//     padding: 16,
//     flex: 1,
//     alignItems: 'stretch',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 32,
//     marginBottom: 18,
//     alignSelf: 'center',
//   },
//   text: {
//     fontSize: 16,
//     marginTop: 16,
//   },
//   link: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   input: {
//     width:'90%',
//   height: 40,
//   margin: 12,
//   borderWidth: 1,
// //   padding: 10,
//   borderRadius:50,
//   alignSelf:'center',
//   borderColor:'#7F83E3',
//   backgroundColor:'#fff',
//   color:'#000',
//   paddingLeft:10
// },
// });

// export default LoginScreen;