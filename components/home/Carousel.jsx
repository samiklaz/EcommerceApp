/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../../assets/constants';

const Carousel = () => {
    const slides = [
        "https://bit.ly/45DuKwk",
        "https://bit.ly/488r6fQ",
        "https://bit.ly/3P0U0FO",
        "https://bit.ly/487y2cK",
    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox 
            images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15,}}
            autoPlay
            circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})