/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Viewm, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../assets/constants';


const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
        <Ionicons 
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
        />
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    backBtn: {
        alignItems: "center",
        position: "absolute",
        zIndex: 99,
        top: SIZES.large - 10,
    },
})