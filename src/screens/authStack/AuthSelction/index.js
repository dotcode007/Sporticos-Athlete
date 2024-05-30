import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, images } from "../../../theme";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";

const AuthSelction = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Image source={images.Logo} style={styles.HeaderImage} />
        <CustomButton
          backgroundColor={"transparent"}
          borderColor={Color.greyLight}
          title={"Register as Mentor"}
          color={Color?.greyLight}
        />
        <CustomButton marginTop={30} title={"Register as Athlete"} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <CustomText
          label={"Have an account? Log in"}
          alignSelf={"center"}
          fontSize={14}
          color={Color?.greyLight}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthSelction;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  HeaderImage: {
    height: 47,
    width: 265,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 130,
  },
});
