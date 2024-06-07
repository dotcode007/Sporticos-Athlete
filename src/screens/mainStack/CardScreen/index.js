import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily, images } from "../../../theme";
import SessionsPoster from "../../../components/SessionsPoster";
import CardRow from "./molecules/CardRow";

const CardScreen = ({ navigation }) => {
  const cardData = [
    {
      id: 0,
      image: images.masterCard,
    },
    {
      id: 1,
      image: images.Visa,
    },
    {
      id: 2,
      image: images.Mir,
    },
  ];
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          marginBottom={20}
          headerTitle={
            <CustomText
              label={"Book a Session"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <SessionsPoster width={"100%"} height={110} />
        <CustomText
          label={"Session Booking (Total)"}
          marginTop={10}
          fontSize={16}
          marginBottom={5}
        />
        <Text style={{ fontFamily: FontFamily.barlowBold, fontSize: 32 }}>
          23.00{" "}
          <Text
            style={{
              fontFamily: FontFamily.barlowBold,
              fontSize: 32,
              color: Color.yellowPrim,
            }}
          >
            $
          </Text>
        </Text>
        <CustomText
          label={"Select Card"}
          marginTop={20}
          fontSize={16}
          marginBottom={10}
          color={Color.black50}
          fontFamily={FontFamily.barlowSemiBold}
        />
        <FlatList
          data={cardData}
          renderItem={({ item }) => {
            return <CardRow key={item.id} source={item.image} />;
          }}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
    marginTop: 40,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80,
  },
});
