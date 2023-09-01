/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../hook/useFetch';
import ProductCardView from './ProductCardView';



const SearchTile = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ProductDetails", {item})}>
        <View style={styles.image}>
            <Image 
                source={{ uri: item.imageUrl }}
                style={styles.productImage}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>
                {item.title}
            </Text>
            <Text style={styles.supplier}>
                {item.supplier}
            </Text>

            <Text style={styles.supplier}>
                {item.price}
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,
        flexDirection: "row",
        borderRadius: SIZES.small,
        backgroundColor: "white",
        padding: SIZES.medium,
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: 'center',
    },
    productImage: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: "cover",
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "Poppins-Bold",
        color: COLORS.primary,
    },
    supplier: {
        fontSize: SIZES.small + 2,
        fontFamily: "Poppins-Regular",
        marginTop: 3,
        color: COLORS.gray,
    },
})