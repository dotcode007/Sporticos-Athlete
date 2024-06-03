import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";
import Icons from "../../../../components/Icons";

const ChatRow = () => {
  return (
    <View style={styles?.parent}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={images.girl}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            resizeMode: "contain",
          }}
        />
        <View style={{ marginLeft: 12 }}>
          <CustomText
            label={"Elia Ana"}
            fontSize={18}
            fontFamily={FontFamily.barlowBold}
          />
          <CustomText
            label={"Mentor"}
            fontSize={14}
            fontFamily={FontFamily.barlowBold}
            color={Color?.grey20}
          />
        </View>
      </View>
      <Icons
        family={"AntDesign"}
        name={"right"}
        size={18}
        color={Color?.grey20}
      />
    </View>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Color.borderColor,
    paddingBottom: 15,
    marginBottom: 25,
  },
});
