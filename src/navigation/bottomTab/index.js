import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/Main/Home';
import {Color, images} from '../../Theme';
import {Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calendar from '../../screen/Main/calendar';
import EditInformation from '../../screen/EditInformation';
import Notification from '../../screen/Main/Notification';
import AddNote from '../../screen/AddNote';
import Setting from '../../screen/Setting';
import CyclesStatistics from '../../screen/CyclesStatistics';
import GraphChart from '../../screen/GraphChart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
     
      <Stack.Screen name="AddNotes" component={AddNote} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="EditInfromation">
      <Stack.Screen name="EditInfromation" component={EditInformation} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
const BottomTab = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.pink,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name='home' color={color} size={33}/>
            // <Image
            //   source={images.bottomCalendar}
            //   style={styles.img}
            //   tintColor={color}
            // />
          ),
        }}
      />
      
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.bottomCalendar}
              style={styles.img}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GraphChart"
        component={GraphChart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.statics}
              style={styles.img}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CycleStatics"
        component={CyclesStatistics}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={images.cycle} style={styles.img} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.bottomUser}
              style={styles.img}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 26,
    resizeMode: 'contain',
    width: 26,
  },
});
export default BottomTab;
