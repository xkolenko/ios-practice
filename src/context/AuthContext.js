import axios from 'axios';
import {BASE_URL} from '../config';

import React, {createContext} from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  //   const loginAdmin = async(
  //     email,
  //     password,
  //   ) => {
  //     await axios
  //       .post(`${BASE_URL}auth/signIn/admin`, {
  //         email,
  //         password,
  //       })
  //       .then(response => {
  //         let employeeInfo = response.data;
  //         console.log("Admin info", employeeInfo)
  //       })
  //       .catch(e => {
  //         console.log(`Admin Login Error ${e}`);
  //       });
  //   };

  const loginAdmin = async (email, password) => {
    try {
      const sendingData = {
        email,
        password,
      };
      console.log('Sendging data', sendingData);
      const response = await axios.post(
        'http://localhost:6500/auth/signIn/admin',
        {sendingData},
      );
      console.log('----------------------', response.data);
      return response.data;
    } catch (error) {
      console.log('error : ', error);
    }
  };

  return (
    <AuthContext.Provider value={{loginAdmin}}>{children}</AuthContext.Provider>
  );
};
