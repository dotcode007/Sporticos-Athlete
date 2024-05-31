import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomText from "../../../components/CustomText";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

const ProfilePhoto = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <CustomText
          label={"Add a profile picture"}
          alignSelf={"center"}
          fontSize={30}
          fontFamily={FontFamily.barlowBold}
          marginTop={40}
          marginBottom={10}
        />
        <CustomText
          label={"Upload a Picture of yourself to complete your profile"}
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={15}
          color={Color.black20}
          marginBottom={20}
        />
        <View
          style={{
            height: 175,
            width: 175,
            backgroundColor: Color.yellowPrim,
            alignSelf: "center",
            borderRadius: 100,
            justifyContent: "flex-end",
            marginBottom: 30,
          }}
        >
          <Image source={images.Shape} style={styles.person} />
          <View style={styles.upload}>
            <Image source={images.Upload} style={styles.uploadIcon} />
          </View>
        </View>
        <CustomInput placeholder={"Write a short bio"} HeaderLabel={"Bio"} />
        <CustomInput
          placeholder={"Write a short bio"}
          HeaderLabel={"Career Goals"}
          height={110}
          multiline={true}
        />
        <CustomButton marginTop={20} title={"Done"} color={Color?.white} />
        <CustomText
          label={"Skip this step"}
          textAlign={"center"}
          alignSelf={"center"}
          marginTop={25}
          fontSize={15}
          color={Color?.black20}
          fontFamily={FontFamily.barlowBold}
          textDecorationLine={"underline"}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  person: {
    height: 122,
    width: 106,
    resizeMode: "contain",
    alignSelf: "center",
  },
  upload: {
    height: 49,
    width: 49,
    backgroundColor: Color?.primary,
    position: "absolute",
    right: 0,
    borderRadius: 30,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadIcon: {
    height: 18,
    width: 15,
    resizeMode: "contain",
  },
});
