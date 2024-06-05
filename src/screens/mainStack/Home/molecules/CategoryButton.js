import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const CategoryButton = ({ label }) => {
  return (
    <View style={styles.parent}>
      <CustomText
        label={label}
        fontSize={14}
        color={Color?.black20}
        fontFamily={FontFamily?.barlowMedium}
      />
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  parent: {
    height: 30,
    width: 90,
    borderRadius: 14,
    borderWidth: 1.4,
    borderColor: Color.black20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
});
