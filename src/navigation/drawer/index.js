import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import CustomDrawer from "../../components/CustomDrawer";
import BottomTab from "../bottomTab";
import { Animated, View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import DrawerSceneWrapper from "../../components/DrawerScreenWrapper";
import { Color } from "../../theme";
import SubscriptionPlan from "../../screens/authStack/SubscriptionPlan";
import AppSetting from "../../screens/mainStack/AppSetting";
import ChangePassword from "../../screens/mainStack/ChangePassword";
import Support from "../../screens/mainStack/Support";
import EditProfile from "../../screens/mainStack/EditProfile";
import TermCondtion from "../../screens/mainStack/TermCondtion";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Drawer.Navigator
        drawerContent={(props) => {
          return <CustomDrawer {...props} />;
        }}
        screenOptions={{
          drawerType: "slide", // Use 'front' or 'back' to match the animation type
          overlayColor: "transparent",
          drawerActiveBackgroundColor: Color.yellowPrim,
          headerShown: false,
          drawerItemStyle: {
            borderRadius: 10,
          },
          drawerActiveTintColor: Color.primary,
          drawerStyle: {
            width: "55%",
            backgroundColor: Color.primary,
            // width: 300,
          },
          sceneContainerStyle: {
            backgroundColor: Color.primary,
          },
        }}
      >
        <Drawer.Screen name="BottomTab">
          {(props) => (
            <DrawerSceneWrapper>
              <BottomTab {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="SubscriptionScreen">
          {(props) => (
            <DrawerSceneWrapper>
              <SubscriptionPlan {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="EditProfile">
          {(props) => (
            <DrawerSceneWrapper>
              <EditProfile {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Support">
          {(props) => (
            <DrawerSceneWrapper>
              <Support {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="SettingsScreen">
          {(props) => (
            <DrawerSceneWrapper>
              <AppSetting {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="TermCondtion">
          {(props) => (
            <DrawerSceneWrapper>
              <TermCondtion {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="ChangePassword">
          {(props) => (
            <DrawerSceneWrapper>
              <ChangePassword {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
export default DrawerNavigator;
