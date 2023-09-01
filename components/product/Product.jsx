/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { COLORS, SIZES } from '../../assets/constants'
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';


const Product = () => {
  const {data, isLoading, error} = useFetch()
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12}}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ): error ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList 
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (<ProductCardView item={item} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.medium }}
        />
        )}
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})