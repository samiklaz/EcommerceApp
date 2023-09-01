/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, StatusBar, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../assets/constants'

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = ({navigation}) => {

  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false) 


  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your device?",
      [
        {
          text: "Cancel clear cache",
          onPress: () => console.log("cancel pressed")
        }, {
          text: "Continue",
          onPress: () => console.log("continue pressed")
        },
        // {defaultindex: 1}
      ]
    )
  }

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your Account?",
      [
        {
          text: "Cancel Delete Account",
          onPress: () => console.log("cancel pressed")
        }, {
          text: "Continue",
          onPress: () => console.log("continue pressed")
        },
        // {defaultindex: 1}
      ]
    )
  }

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to Logout",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed")
        }, {
          text: "Continue",
          onPress: () => console.log("continue pressed")
        },
        {defaultindex: 1}
      ]
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.container}>
          <View style={{ width: "100%"}}>
              <Image 
                source={require("../assets/images/space.jpg")}
                style={styles.cover}
              />
          </View>

          <View style={styles.profileContainer}>
              <Image 
                source={require("../assets/images/profile.jpeg")}
                style={styles.profile}
              />

              <Text style={styles.name}>
                {userLogin ? "Asuquo" : "Please Login into your account"}
              </Text>

              {
                userLogin === false ? (
                  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.menutext}>
                            L O G I N 
                        </Text>
                    </View>
                  </TouchableOpacity>
                ): (
                  <View style={styles.loginBtn}>
                      <Text style={styles.menutext}>
                            admin@gmail.com
                        </Text>
                  </View>
                )
              }

              {
                userLogin === false ? (
                  <View></View>
                ): (
                  <ScrollView style={styles.menuStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
                        <View style={styles.menuItem(0.2)}>
                            <MaterialCommunityIcons 
                              name="heart-outline"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Favorites
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                        <View style={styles.menuItem(0.2)}>
                            <MaterialCommunityIcons 
                              name="truck-delivery-outline"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Orders
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <View style={styles.menuItem(0.2)}>
                            <SimpleLineIcons 
                              name="bag"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Bag
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => clearCache()}>
                        <View style={styles.menuItem(0.2)}>
                            <MaterialCommunityIcons 
                              name="cached"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Clear Cache
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteAccount()}>
                        <View style={styles.menuItem(0.2)}>
                            <AntDesign
                              name="deleteuser"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Delete Account
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => logout()}>
                        <View style={styles.menuItem(0.2)}>
                            <AntDesign
                              name="logout"
                              size={24}
                              color={COLORS.primary}
                            />
                            <Text style={styles.menutext}>
                              Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                  </ScrollView>
                )
              }
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.lightWhite
  },
  cover: {
    height: 200,
    width: "100%",
    resizeMode: "cover"
  },
  profileContainer: {
    flex: 1,
    alignItems: "center"
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 9999,
    borderColor: COLORS.primary,
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -90
  },
  name: {
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxLarge
  },
  menutext: {
    fontFamily: "Poppins-Regular",
    color: COLORS.gray,
    marginHorizontal: 20,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
    
  },
  menuStyle: {
    marginTop: SIZES.large,
    width: SIZES.width - SIZES.large,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor: COLORS.gray,
  }),
})