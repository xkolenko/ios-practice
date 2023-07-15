import React, { Component, useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const EmployeeRegistrationScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    // const {registerEmployee} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={input => setUsername(input)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={input => setEmail(input)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter phone ID"
          value={phoneNumber}
          onChangeText={input => setPhoneNumber(input)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={input => setLocation(input)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={input => setPassword(input)}
          secureTextEntry
        />
        </View>
        <View>
            <Button title='Create Technician' onPress={()=>{
                // registerEmployee(username, email, password, location, phoneNumber);
                console.log("employee registern screen button")
            }}/>
        </View>
      </View>
    )

}

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
})
export default EmployeeRegistrationScreen
