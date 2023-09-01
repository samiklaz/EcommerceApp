/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './homestyle'
import { Carousel, Headings, Product, Welcome } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
      <View>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
              <Ionicons 
                name="location-outline"
                size={24}
              />

              <Text style={styles.location}>Calabar, Nigeria</Text>

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