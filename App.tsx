import React from 'react';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    // <HomeScreen navigation={undefined} />
    <AuthProvider  >
 
      <Navigation/>
    </AuthProvider>
  );
};

export default App;
