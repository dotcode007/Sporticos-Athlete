import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/authStack/login";
import Onboarding from "../../screens/onBoarding";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OnBoarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
export default AuthStack;
