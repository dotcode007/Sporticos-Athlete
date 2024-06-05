import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/authStack/Login";
import AuthSelction from "../../screens/authStack/AuthSelction";
import Onboarding from "../../screens/onBoarding";
import SignUp from "../../screens/authStack/SignUp";
import ForgetPassword from "../../screens/authStack/ForgetPassword";
import Otp from "../../screens/authStack/Otp";
import ProfilePhoto from "../../screens/authStack/ProfilePhoto";
import SubscriptionPlan from "../../screens/authStack/SubscriptionPlan";
import ChatScreen from "../../screens/mainStack/ChatScreen";
import ChatDetailsScreen from "../../screens/mainStack/MessageDetailsScreen";
import DrawerNavigator from "../drawer";
import Home from "../../screens/mainStack/Home";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Drawer"
    >
      <Stack.Screen name="AuthSelction" component={AuthSelction} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OnBoarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
      <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatDetails" component={ChatDetailsScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default AuthStack;
