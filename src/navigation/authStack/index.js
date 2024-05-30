import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/authStack/login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
