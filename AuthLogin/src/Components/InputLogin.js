import * as React from 'react';
import {TextInput,StyleSheet} from 'react-native'
// import { TextInput } from 'react-native-paper';

const InputLogin = (props) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
    style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={props.placeholder}
    
    />
  );
};

const styles = StyleSheet.create({
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

export default InputLogin;