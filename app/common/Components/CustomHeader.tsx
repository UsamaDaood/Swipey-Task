import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
//** Styles */
import Color from '../../libs/Colors';
import {responsiveFontSize} from '../../libs/responsiveFont';
//** Interfaces */
import {HeaderProps} from '../../Interfaces';

const CustomHeader = ({
  leftIcon,
  headerTitle,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  containerStyle,
}: HeaderProps) => {
  return (
    <View
      style={[styles.headerStyle, styles.headerDefaultStyle, containerStyle]}>
      <View style={{flex: 0.1}}>
        {leftIcon && (
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={{flex: 0.7}}>
        <Text numberOfLines={1} style={styles.textStyle}>
          {headerTitle}
        </Text>
      </View>

      <View style={{flex: 0.1}}>
        {RightIcon && (
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={styles.cartIconStyle}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingBottom: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerDefaultStyle: {
    alignItems: 'center',
    borderBottomColor: Color.darkGray,
    backgroundColor: Color.whiteColor,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
  },
  textStyle: {
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    alignSelf: 'center',
    //flex: 0.5,
    color: Color.black,

    //width: '90%',
  },
  cartIconStyle: {
    width: responsiveFontSize(25),
    height: responsiveFontSize(25),
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default CustomHeader;
