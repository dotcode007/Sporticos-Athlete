import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/authStack/login";
import AuthSelction from "../../screens/authStack/AuthSelction";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AuthSelction"
    >
      <Stack.Screen name="AuthSelction" component={AuthSelction} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
