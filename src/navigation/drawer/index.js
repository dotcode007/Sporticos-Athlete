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
            borderRadius: 9,
          },
          drawerActiveTintColor: Color.primary,
          drawerStyle: {
            width: "65%",
            backgroundColor: Color.primary,
            // width: 300,
          },
          sceneContainerStyle: {
            backgroundColor: Color.primary,
          },
        }}
      >
        <Drawer.Screen name="Subscription">
          {(props) => (
            <DrawerSceneWrapper>
              <BottomTab {...props} />
            </DrawerSceneWrapper>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
export default DrawerNavigator;
