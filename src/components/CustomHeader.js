import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "./Icons";
import { Color } from "../theme";

const CustomHeader = ({ onPress }) => {
  return (
    <View>
      <Icons
        name={"left"}
        family={"AntDesign"}
        size={20}
        color={Color.black10}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
