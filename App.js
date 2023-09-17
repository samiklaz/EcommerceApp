/* eslint-disable prettier/prettier */
import { StatusBar, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import { Cart, ProductDetails, NewArrival, Login, Favorites, Orders, SignUp} from './screens'

const Stack = createStackNavigator()

const App = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('transparent');
  }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Bottom Navigation'
            component={BottomTabNavigator}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='Cart'
            component={Cart}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='ProductDetails'
            component={ProductDetails}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='ProductList'
            component={NewArrival}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='Favorites'
            component={Favorites}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='Orders'
            component={Orders}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name='SignUp'
            component={SignUp}
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App