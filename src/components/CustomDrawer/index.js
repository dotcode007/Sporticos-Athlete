import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Color, FontFamily, Spacing, images} from '../../Theme';
import {GeneralStyle} from '../../constants/GenralStyle';
import {styles} from './styles';
import Setting from '../../assets/svg/setting.svg';
import Notification from '../../assets/svg/notification.svg';
import Delete from '../../assets/svg/delete.svg';
import Star from '../../assets/svg/star.svg';
import ShareSvg from '../../assets/svg/share.svg';
import CustomText from '../CustomText';
import Button from '../Button/Button';
import DeleteModal from './molecules/DeleteModal';
import Share from 'react-native-share';
import InAppReview from 'react-native-in-app-review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RatingModal from './molecules/RatingModal';

const CustomDrawer = props => {
  const [isDeleteDataModal, setIsDeleteDataModal] = useState(false);
  const [isdataDeleted, setIsDataDeleted] = useState(false);
  const [isDeleteIcon, setIsDeleteIcon] = useState(false);
  const [isRatingModal, setIsRatingModal] = useState(false);
  const onDismissDeleteModal = () => {
    setIsDeleteDataModal(false);
  };
  const osSuccessDeleteModla = () => {
    setIsDataDeleted(false);
  };

  const options = {
    title: 'Share via',
    message: 'some message',
    url: 'some share url',
    social: Share.Social.WHATSAPP,
    whatsAppNumber: '9199999999', // country code + phone number
    filename: 'test', // only for base64 file in Android
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  const onRate = async () => {
    try {
      const isAvailable = InAppReview.isAvailable();
      console.log('isAppReview available:', isAvailable);

      if (isAvailable) {
        const result = await InAppReview.RequestInAppReview();
        console.log('InAppReview result:', result);
      } else {
        console.log('InAppReview is not available on this device.');
        // Handle the case where in-app review is not available
      }
    } catch (error) {
      console.log('Error launching in-app review:', error);
      // Handle error
    }
  };
  const drawerData = [
    {
      id: 0,
      title: 'Settings',
      svg: <Setting />,
      onPress: () => {
        props.navigation.navigate('Profile', {
          screen: 'Setting',
        });
      },
    },
    {
      id: 1,
      title: 'Delete Account',
      svg: <Delete />,
      onPress: () => setIsDeleteIcon(true),
    },
    {
      id: 2,
      title: 'Share',
      svg: <ShareSvg />,
      onPress: () => share(),
    },
    {
      id: 3,
      title: 'Star',
      svg: <Star />,
      onPress: () => setIsRatingModal(true),
    },
    {
      id: 4,
      title: 'Notification',
      svg: <Notification />,
      onPress: () =>
        props.navigation.navigate('Profile', {
          screen: 'Notification',
        }),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={GeneralStyle.rowStyle}>
          <View style={styles.container}>
            <View style={styles.lineBase} />
            <Image source={images.drawerLogo} style={styles.logoContainer} />
          </View>

          <TouchableOpacity
            style={styles.filterContainer}
            activeOpacity={0.5}
            onPress={() => props.navigation.closeDrawer()}>
            <Image source={images.menu} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.mapContainer}>
          {drawerData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={item?.onPress}
                key={index}
                style={[GeneralStyle.rowStyle, {marginBottom: 35}]}>
                {item.svg}
                <CustomText
                  label={item.title}
                  fontSize={20}
                  marginLeft={Spacing.spacing_sm}
                  fontFamily={FontFamily.poppinsSemiBold}
                  color={Color.white}
                  // onPress={item.onPress}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </DrawerContentScrollView>
      <View style={styles.logoutContainer2}>
        <Button
          text={'Logout'}
          btnStyle={[GeneralStyle.mainBtan, styles.btnContainer]}
          onPress={() => {
            props.navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
            AsyncStorage.removeItem('isAuth');
          }}
          btnTextStyle={[GeneralStyle.btnText, {fontSize: 20}]}
        />
      </View>
      <DeleteModal
        modalVisibility={isDeleteIcon}
        handleTouchablePress={() => setIsDeleteIcon(false)}
        onDismiss={() => setIsDeleteIcon(false)}
      />
      {isRatingModal && (
        <RatingModal
          modalVisibility={isRatingModal}
          handleTouchablePress={() => setIsRatingModal(false)}
          onDismiss={() => setIsRatingModal(false)}
        />
      )}
    </View>
  );
};
export default CustomDrawer;
