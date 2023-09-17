/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Viewm, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../assets/constants';


const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)}>
      {!loader ? (
        <Text style={styles.btnText}>{title}</Text>
      ): (
        <ActivityIndicator />
      )}
        
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnStyle: (backgroundColor) => ({
        height: 50,
        width: "100%",
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 12,
    }),
    btnText: {
        fontFamily: "Poppins-Bold",
        color: COLORS.white,
        fontSize: 18
    }
})