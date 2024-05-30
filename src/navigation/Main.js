import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import AuthStack from './authStack';

const Main = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default Main;
