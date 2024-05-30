import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../../components/CustomDrawer';
import BottomTab from '../bottomTab';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FF4996',
          width: '100%',
        },
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
