import {View, StyleSheet, TextInput, Text, Keyboard} from 'react-native';
import React, {useRef, useState} from 'react';
import {Color, FontFamily} from '../Theme';
import {GeneralStyle} from '../constants/GenralStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFontSize} from '../assets/utils/ResponsiveFn';

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
}) => {
  const [hidePass, setHidePass] = useState(secureTextEntry);
  return (
    <View style={{marginBottom: 17}}>
      <View
        style={[
          styles.inputContainer,
          {
            width: width || '100%',
            borderWidth: errorMessage ? 1 : 0,
            borderColor: errorMessage ? Color.error : null,
          },
        ]}>
        <TextInput
          ref={inputRef}
          style={[
            GeneralStyle.regularText,
            {
              flex: 1,
              height: '100%',
              backgroundColor: Color.inputBackGroundColor,
              borderRadius: 12,
              paddingVertical: 5,
              paddingHorizontal: inputPaddingHorizontal || 0,
              fontSize: 12,
              color: Color.blackTextColor,
              fontFamily: FontFamily.poppinsRegular,
            },
          ]}
          editable={editable}
          placeholder={placeholder}
          textContentType={textContentType}
          placeholderTextColor={placeholderTextColor || Color.grayTextColor}
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
            name={hidePass ? 'eye-off-outline' : 'eye-outline'}
            size={getFontSize(3)}
            color={iconColor || Color.pink}
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          />
        ) : iconName ? (
          <MaterialCommunityIcons
            name={'email-outline'}
            size={getFontSize(3)}
            color={iconColor || Color.pink}
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.inputBackGroundColor,
    marginBottom: 2,
    height: 60,
    borderRadius: 12,
  },
  icon: {
    padding: 10,
  },
  errorMessage: {
    marginLeft: 10,
    fontSize: 12,
    color: 'red',
  },
});
