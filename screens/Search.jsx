/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { COLORS, SIZES } from '../assets/constants'
import axios from 'axios';
import { SearchTile } from '../components';

const Search = () => {
  const navigation = useNavigation()
  const [searchKey, setSearchKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [searchResults, setSearchResults ] = useState([])

  console.log("error == ", isError)


  const handleSearch = async() => {
    setIsLoading(true)
    try {
        const response = await axios.get('http://10.0.2.2:3000/api/products/search/' + searchKey);
        setSearchResults(response.data)
      } catch (error) {
        setIsError(true)
        console.error("Failed to get products ", error);
      } finally {
        console.log("Reached here");
      }
    setIsLoading(false)
      
  }

  return (
    <View>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons 
                    name="camera-outline"
                    size={24}
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchWrapper}>
                <TextInput 
                    value={searchKey}
                    onChangeText={(text) => setSearchKey(text)}
                    placeholder='What are you looking for?'
                    style={styles.searchInput}
                />
            </TouchableOpacity>

            <View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
                    <Ionicons 
                        name="search-sharp"
                        size={SIZES.xLarge}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>
        </View>

        
        {isLoading ? (
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
          ): isError ? (
            <Text>Something went wrong</Text>
          ):searchResults.length === 0 ? (
            <View style={{ flex: 1, }}>
                <Image 
                    source={require("../assets/images/Pose23.png")}
                    style={styles.searchImage}
                />
            </View>
        ):  (
            <FlatList 
                data={searchResults}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (<SearchTile item={item} />)}
                style={{ marginHorizontal: 12}}
            />
          )}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: SIZES.small,
    marginTop: SIZES.xLarge * 2
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
    searchImage: {
        resizeMode: "contain",
        width: SIZES.width - 100,
        height: SIZES.height - 300,
        opacity: 0.9
    },
})