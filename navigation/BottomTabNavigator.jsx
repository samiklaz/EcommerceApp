/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../assets/constants'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                    name={focused ? "home": "home-outline"}
                    size={24}
                    color={focused ? COLORS.primary : COLORS.gray}
                />
            ),
            }}
        />
        <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name="search-sharp"
                        size={24}
                        color={focused ? COLORS.primary : COLORS.gray2}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name={focused ? "person": "person-outline"}
                        size={24}
                        color={focused ? COLORS.primary : COLORS.gray2}
                    />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator