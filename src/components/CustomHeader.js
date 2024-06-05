import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "./Icons";
import { Color } from "../theme";
import CustomText from "./CustomText";

const CustomHeader = ({ onPress, headerTitle, rightIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Icons
        name={"left"}
        family={"AntDesign"}
        size={20}
        color={Color.black10}
        onPress={onPress}
      />
      {headerTitle}
      {rightIcon}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
