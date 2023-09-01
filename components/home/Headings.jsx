/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'


import { COLORS, SIZES } from '../../assets/constants';

const Headings = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Ionicons 
                name="grid"
                size={24}
                color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        // marginBottom: -SIZES.xSmall,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.xLarge - 2,
    },
})