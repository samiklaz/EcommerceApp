/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, StatusBar, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../assets/constants'
import { Formik } from 'formik';
import * as Yup from "yup"

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { BackBtn, Button } from '../components';

const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least Characters')
      .required('Email must not be empty'),
    email: Yup.string().email('Provide a valid email address').required('Password must not be empty'),
  });
  

const Login = ({navigation}) => {
    const [loader, setLoader] = useState(false)
    const [responseData, setResponsedata] = useState(null)
    const [obsecureText, setObsecureText] = useState(false)

  return (
    <View style={{ marginTop: StatusBar.currentHeight}}>
      <ScrollView>
        <View style={{ marginHorizontal: 20}}>
            <BackBtn onPress={() => navigation.goBack()} />
            <Image 
                source={require("../assets/images/bk.png")}
                style={styles.cover}
            />

            <Text style={styles.title}>Unlimited Luxurious Funiture</Text>

            <Formik 
                initialValues={{email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched}) => (
                    <View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                <MaterialCommunityIcons 
                                    name="email"
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    placeholder='Enter Email'
                                    onFocus={() => {setFieldTouched("email")}}
                                    onBlur={() => [setFieldTouched('email', '')]}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ flex: 1}}
                                />
                            </View>
                            {touched.email && errors.email && (
                                <Text style={styles.errorMessage}>
                                    {errors.email}
                                </Text>
                            )}
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                <MaterialCommunityIcons 
                                    name="lock-outline"
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    placeholder='Enter Password'
                                    onFocus={() => {setFieldTouched("password")}}
                                    onBlur={() => [setFieldTouched('password', '')]}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    secureTextEntry={obsecureText}
                                    style={{ flex: 1}}
                                />

                                <TouchableOpacity onPress={() => setObsecureText(!obsecureText)} style={{ marginTop: 15,}}>
                                    <MaterialCommunityIcons 
                                        name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                                        size={18}
                                    />
                                </TouchableOpacity>
                            </View>
                            
                            {touched.password && errors.password && (
                                <Text style={styles.errorMessage}>
                                    {errors.password}
                                </Text>
                            )}
                        </View>


                        <Button title="L O G I N" onPress={() => {}} />
                    </View>
                )}
                
            </Formik>

        </View>
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    cover: {
        height: SIZES.height / 2.4,
        width: SIZES.width - 60,
        resizeMode: "contain",
        marginBottom: SIZES.xxLarge
    },
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        alignItems: "center",
        marginBottom: SIZES.xxLarge,
    },
    wrapper: {
        marginBottom: 20,
        // marginHorizontal: 20,
    },
    label: {
        fontFamily: "Poppins-Regular",
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 55,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignitems: "center",
    }),
    iconStyle: {
        marginRight: 10,
        marginTop: 15,
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: "Poppins-Regular",
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall,
    },
})