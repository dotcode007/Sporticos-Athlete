import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text, Animated } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Color, icons } from "../../theme";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View style={{ flex: 1 , backgroundColor:""}}>
      <Text>sdksaljdkljsakl</Text>
    </View>
  );
};

const Calendar = () => {
  return (
    <View>
      <Text>Calendar</Text>
    </View>
  );
};

const Sessions = () => {
  return (
    <View>
      <Text>Sessions</Text>
    </View>
  );
};

const Mentors = () => {
  return (
    <View>
      <Text>Mentors</Text>
    </View>
  );
};

const Chat = () => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

const BottomTab = ({ animatedStyle }) => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.yellowPrim,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={icons.home} style={styles.img} tintColor={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={icons.calendar}
                style={styles.img}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sessions"
          component={Sessions}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={icons.session}
                style={styles.img}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Mentors"
          component={Mentors}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={icons.profile}
                style={styles.img}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={icons.chat} style={styles.img} tintColor={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 26,
    resizeMode: "contain",
    width: 26,
  },
});
export default BottomTab;
