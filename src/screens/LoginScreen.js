import React, {Component, useContext, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loginAdmin} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <TextInput
          style={styles.input}
          placeholder="Enter email.."
          value={email}
          onChangeText={input => setEmail(input)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password.."
          value={password}
          onChangeText={input=>setPassword(input)}
          secureTextEntry
        />
        <Button title="Login" onPress={()=>{
            loginAdmin(email, password);
        }}/>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Contact_Admin')}>
          <Text style={styles.link}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 40,
  },
  link: {
    color: 'blue',
  },
});
export default LoginScreen;

