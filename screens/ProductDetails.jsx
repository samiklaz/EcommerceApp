/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native'
import React, {useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../assets/constants'

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1)
  const route = useRoute()

  const {item} = route.params

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons 
              name="chevron-back-circle"
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons 
              name="heart"
              size={30}
              color={COLORS.primary}
            />
          </TouchableOpacity>
      </View>

      <Image 
        source={{
          uri: item.imageUrl
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>

        <View style={styles.ratingRow}>
            <View style={styles.rating}>
                {[1,2,3,4,5].map((index) => (
                  <Ionicons  
                    key={index}
                    name="star"
                    size={24}
                    color="gold"
                  />
                ))}

                <Text style={styles.ratingText}>(4.9)</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={increment}>
                  <SimpleLineIcons 
                    name="plus"
                    size={20}
                    color={COLORS.black}
                  />
              </TouchableOpacity>
              <Text style={styles.ratingText}>  {count}   </Text>
              <TouchableOpacity onPress={decrement}>
                  <SimpleLineIcons 
                    name="minus"
                    size={20}
                    color={COLORS.black}
                  />
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>
              Description
            </Text>
            <Text style={styles.descText}>
            {item.description}
            </Text>
        </View>

        <View style={{ marginBottom: SIZES.small}}>
            <View style={styles.location}>
              <View style={{ flexDirection: 'row', }}>
                  <Ionicons name="location-outline" size={20} />
                  <Text>  {item.product_location}</Text>
              </View>   

              <View style={{ flexDirection: 'row', }}>
                  <MaterialCommunityIcons name="truck-delivery-outline" size={20}  />
                  <Text>  Free Delivery  </Text>
              </View>   
            </View>
        </View>

        <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.addCard}>
                <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
            </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge * 1.3,
    zIndex: 999,
    width: SIZES.width - 44.
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover"
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  price: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.large,
    paddingHorizontal: 10,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
    paddingBottom: SIZES.small
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    paddingHorizontal: SIZES.xSmall,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: "Poppins-Medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 22,
    paddingBottom: SIZES.small,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.xSmall,
    borderRadius: SIZES.large,
    marginLeft: 12,
    alignItems: "center"
  },
  cartTitle: {
    fontFamily: "Poppins-Medium",
    color: COLORS.lightWhite,
    fontSize: SIZES.medium
  },
  addCard: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center"
  },
})