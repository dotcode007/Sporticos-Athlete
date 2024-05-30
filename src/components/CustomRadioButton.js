import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily, FontSize} from '../Theme';
import CustomModal from './CustomModal';
import CustomText from './CustomText';

const CustomRadioButton = ({
  onPress,
  borderColor,
  width,
  backgroundColor,
  dayName,
  marginLeft,
}) => {
  const [calendarModal, setCalendarModal] = useState('');
  return (
    <View style={[styles.maincontainer, {width: width}]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.mainButtonContainer, {borderColor: borderColor}]}>
        <View
          style={[styles.container, {backgroundColor: backgroundColor}]}></View>
      </TouchableOpacity>
      <View>
        <CustomText
          label={dayName}
          fontFamily={FontFamily.poppinsRegular}
          fontSize={FontSize.size_xs}
          color={Color.black20}
          marginLeft={8}
        />
      </View>
    </View>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  mainButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
