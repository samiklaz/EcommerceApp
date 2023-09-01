/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { COLORS, SIZES } from '../assets/constants';
import { ProductList } from '../components';

const NewArrival = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                name="chevron-back-circle"
                size={30}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>

            <Text style={styles.heading}>Products </Text>
          </View> 

          <ProductList />

      </View>
    </SafeAreaView>
  )
}

export default NewArrival

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
  },
  heading: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
})