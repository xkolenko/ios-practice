import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View >
        <TouchableOpacity style={{flexDirection:'row', marginTop: '20'}}>
            <Button title='Employee Registration' onPress={()=>{navigation.navigate('Employee_Registration')}}/>
            <Button title='Time sheet'/>
            
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
