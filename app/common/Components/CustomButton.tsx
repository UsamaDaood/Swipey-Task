import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../../libs/Colors';
/** Interfaces */
import {ButtonProps} from '../../Interfaces';

const CustomButton = ({
  btnString,
  onClick,
  btnStyle,
  titleStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, btnStyle]} onPress={onClick}>
      <Text style={[styles.btnTextStyle, titleStyle]}>{btnString}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 7,
  },
  btnTextStyle: {
    color: Color.whiteColor,
    alignSelf: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
});

export default CustomButton;
