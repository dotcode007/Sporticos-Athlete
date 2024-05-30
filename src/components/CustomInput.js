import { View, StyleSheet, TextInput, Text, Keyboard } from "react-native";
import React, { useRef, useState } from "react";

import { GeneralStyle } from "../constants/GenralStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getFontSize } from "../assets/utils/ResponsiveFn";
import { Color, FontFamily } from "../theme";
import CustomText from "./CustomText";

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  placeholderTextColor,
  width,
  right,
  keyboardType,
  returnKeyType,
  rightText,
  isEmail,
  iconColor,
  rightWithCustomIcon,
  errorMessage,
  iconName,
  inputPaddingHorizontal,
  props,
  editable,
  inputMode,
  inputRef,
  onSubmitEditing,
  autoFocus,
  onBlur,
  textContentType,
  blurOnSubmit,
  HeaderLabel,
}) => {
  const [hidePass, setHidePass] = useState(secureTextEntry);
  return (
    <View style={{ marginBottom: 17 }}>
      <CustomText
        label={HeaderLabel}
        marginBottom={5}
        fontSize={16}
        fontFamily={FontFamily.barlowMedium}
      />
      <View
        style={[
          styles.inputContainer,
          {
            width: width || "100%",
            borderWidth: 1,
            borderColor: errorMessage ? Color.error : Color?.greyLight10,
          },
        ]}
      >
        <TextInput
          ref={inputRef}
          style={[
            GeneralStyle.regularText,
            {
              flex: 1,
              height: "100%",
              borderRadius: 12,
              paddingVertical: 5,
              paddingHorizontal: inputPaddingHorizontal || 20,
              fontSize: 14,
              color: Color.darkGrey,
              fontFamily: FontFamily.poppinsRegular,
            },
          ]}
          editable={editable}
          placeholder={placeholder}
          textContentType={textContentType}
          placeholderTextColor={placeholderTextColor || Color.darkGrey}
          value={value}
          selectionColor={Color.pink}
          onChangeText={onChangeText}
          autoCapitalize="none"
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          // inputMode={inputMode}
          onBlur={onBlur}
          secureTextEntry={hidePass}
          autoCorrect={false}
          onSubmitEditing={onSubmitEditing}
        />
        {secureTextEntry ? (
          <MaterialCommunityIcons
            name={hidePass ? "eye-off-outline" : "eye-outline"}
            size={getFontSize(3)}
            color={iconColor || Color.black}
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          />
        ) : iconName ? (
          <MaterialCommunityIcons
            name={"check"}
            size={getFontSize(3)}
            color={iconColor || Color.black}
            style={styles.icon}
          />
        ) : null}
        {/* {right && (
          <MaterialCommunityIcons
            name={
              iconName ? iconName : hidePass ? 'eye-off-outline' : 'eye-outline'
            }
            size={getFontSize(3)}
            color={iconColor || Color.pink}
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          />
        )} */}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white10,
    marginBottom: 2,
    height: 58,
    borderRadius: 12,
  },
  icon: {
    padding: 10,
  },
  errorMessage: {
    marginLeft: 10,
    fontSize: 12,
    color: "red",
  },
});
