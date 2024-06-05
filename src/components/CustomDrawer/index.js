import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Color, FontFamily, images } from "../../theme";
import CustomText from "../CustomText";

const CustomDrawer = (props) => {
  // Ensure props.progress is being passed correctly
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image source={images.slide1} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <CustomText
              label={"John Welles"}
              fontSize={20}
              marginTop={10}
              color={Color.white}
              fontFamily={FontFamily.barlowMedium}
            />
            <CustomText
              label={"Tactical Tie"}
              fontSize={14}
              marginTop={10}
              color={Color.yellowPrim}
              textAlign={"center"}
              fontFamily={FontFamily.barlowMedium}
            />
          </View>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.signOutButton}>
        <MaterialIcons name="logout" size={24} color={Color.yellowPrim} />
        <CustomText
          color={Color.yellowPrim}
          fontSize={15}
          fontFamily={FontFamily.barlowMedium}
          label={"Sign Out"}
          marginLeft={10}
        />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 100,
    marginRight: 16,
  },
  profileDetails: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  tier: {
    fontSize: 14,
    color: "#b0b0b0",
  },
  subscriptionButton: {
    backgroundColor: "#bada55",
    padding: 10,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  subscriptionText: {
    color: "#1c1c1c",
    fontWeight: "bold",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 20,
  },
  signOutText: {
    color: "white",
    marginLeft: 8,
  },
});

export default CustomDrawer;
