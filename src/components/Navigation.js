import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EmployeeRegistrationScreen from '../screens/EmployeeRegistrationScreen';
import {Text, View} from 'react-native';
import ContactAdmin from '../screens/ContactAdmin';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer pod-install iosContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Employee_Registration"
            component={EmployeeRegistrationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Contact_Admin"
            component={ContactAdmin}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
