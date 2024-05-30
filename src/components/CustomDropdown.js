import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  UIManager,
} from 'react-native';

import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/AntDesign';

import {Color, FontFamily} from '../Theme';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomDropdownPicker = ({
  data,
  value,
  setValue,
  label,
  errorMessage,
  disabled,
  emptyLabel,
  showIcon,
  emptyLabelPress,
  open,
  setOpen,
  dropdownMainStyle,
  insideContentStyle,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [select, setSelect] = useState();
  console.log('select', select);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSelect(value);
  //   }, 200);
  // }, [value]);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
    setOpen?.(!open);
  };

  const selectOption = option => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setValue(option?.value);
    setSelect(option?.label);
    setIsOpen(false);
    setOpen?.(false);
  };

  return (
    <>
      <View style={[styles.dropdownMainContainer, dropdownMainStyle]}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.6}
          style={[
            insideContentStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              height: 55,
              backgroundColor: Color.inputBackGroundColor,
              borderRadius: 10,
            },
          ]}
          onPress={toggleDropdown}>
          {console.log('select', select)}
          <CustomText
            label={
              select?.length == 0 || select?.length == undefined
                ? label
                : select
            }
            fontSize={16}
            fontFamily={FontFamily.poppinsRegular}
            color={
              select?.length == 0 || select?.length == undefined
                ? Color.black10
                : Color.black
            }
          />

          <Icon name={isOpen ? 'up' : 'down'} size={18} color={Color.black10} />
        </TouchableOpacity>
        {isOpen && data?.length > 0 && (
          <ScrollView
            style={{
              borderColor: Color.pink,
              borderRadius: 5,
              borderWidth: 0.5,
              paddingHorizontal: 20,
            }}
            showsVerticalScrollIndicator={false}>
            {data?.map((option, i) => {
              console.log('option.label', option.label);
              return (
                <TouchableOpacity key={i} onPress={() => selectOption(option)}>
                  <CustomText
                    label={option.label}
                    fontSize={14}
                    marginTop={5}
                    marginBottom={data?.length - 1 == i ? 10 : 0}
                    color={Color.black}
                    fontFamily={FontFamily.poppinsMedium}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
        {isOpen && data?.length == 0 && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setIsOpen(false);
              setOpen?.(false);
              emptyLabelPress?.();
            }}
            style={styles.emptyContainer}>
            <CustomText
              label={emptyLabel || 'No Data'}
              color={Color.black}
              fontSize={14}
              fontFamily={FontFamily.poppinsBold}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomDropdownPicker;
const styles = StyleSheet.create({
  dropdownMainContainer: {
    borderRadius: 5,
    // paddingHorizontal: widthDP(10),
    // backgroundColor: colors.lightGray,
    borderWidth: 0,
    // width: '100%',
    // maxHeight: heightDP(150),
    marginBottom: 10,
  },
  emptyContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Color.lightBlack,
    borderTopWidth: 1,
  },
});

