import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, images } from "../../../theme";

const AuthSelction = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Image source={images.Logo} style={styles.HeaderImage} />
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
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "red",
  },
  HeaderImage: {
    height: 47,
    width: 265,
    resizeMode: "contain",
  },
});
