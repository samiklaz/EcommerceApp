/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { COLORS, SIZES } from '../../assets/constants'

const Welcome = () => {

    const navigation = useNavigation()

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
            <Text style={styles.welcomeText(COLORS.primary, 0)}>Luxurious Furniture</Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather 
                    name="search"
                    size={24}
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchWrapper}>
                <TextInput 
                    value=""
                    onPressIn={() => navigation.navigate("Search")}
                    placeholder='What are you looking for?'
                    style={styles.searchInput}
                />
            </TouchableOpacity>

            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons 
                        name="camera-outline"
                        size={SIZES.xLarge}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>

        </View>

        
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeText: (color, top) =>  ({
        fontFamily: "Poppins-Bold",
        fontSize: SIZES.xxLarge - 10,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small,
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
        marginHorizontal: SIZES.small,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: 10,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "Poppins-Regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        backgroundColor: COLORS.primary,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: "center"
    },
})