/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './homestyle'
import { Carousel, Headings, Product, Welcome } from '../components';

const Home = ({navigation}) => {

  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false) 

  useEffect(() => {
    checkExistingUser()
  }, [])

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id")
    const userId = `user${JSON.parse(id)}`

    try {
      const currentUser = await AsyncStorage.getItem(userId)
      console.log("current user == ", currentUser)

      if(currentUser !== null) {
        const parseData = JSON.parse(currentUser)
        setUserData(parseData)
        setUserLogin(true)
      }
    } catch(error) {
      console.log("Error retrieving the data: ", error)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
      <View>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
              <Ionicons 
                name="location-outline"
                size={24}
              />

              <Text style={styles.location}>{userData ? userData.location : "Lagos, Nigeria"} </Text>

              <View style={{ alignItems: "flex-end"}}>
                <View style={styles.cartCount}>
                    <Text style={styles.cartNumber}>8</Text>
                </View>

                <TouchableOpacity>
                  <Fontisto 
                    name="shopping-bag"
                    size={24}
                  />
                </TouchableOpacity>
                
              </View>
          </View>
        </View>

        <ScrollView>
          <Welcome />
          <Carousel />
          <Headings />
          <Product />
          <View style={{ marginBottom: 130}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home