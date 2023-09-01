/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native"
import { COLORS, SIZES } from "../assets/constants"

const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 9999,
    },
    cartNumber: {
        fontFamily: "Poppins-Regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite,
    },
})


export default styles