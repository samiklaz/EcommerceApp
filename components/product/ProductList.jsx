/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../hook/useFetch';
import ProductCardView from './ProductCardView';

const ProductList = () => {
    const {data, isLoading, error} = useFetch()

    if(isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                numColumns={2}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (<ProductCardView item={item} />)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    container: {
        alignItems: "center",
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small / 2
    },
    seperator: {
        height: 16,
    }
})