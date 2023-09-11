import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { THEME } from "../themes/colors";
import { blue1 } from "../constants/colors";

const lightBlue = THEME.colors.LIGHTBLUE1

const Card = ({isDarkBlue, text, iconName, iconType}) => {
    const CustomIconColor = isDarkBlue ? '#2362df' : 'white'
    const CustomIcon =
        iconType === 'FontAwesome5'
        ? (<FontAwesome5 color= {CustomIconColor} name={iconName} size={30} />)
        : (<AntDesign color= {CustomIconColor} name={iconName} size={30} />)
               
    return (
        <View style={isDarkBlue ? styles.cardContainer2 : styles.cardContainer}>
                <View style = {isDarkBlue ? styles.cardIconContainer : styles.cardIconContainer2}>
                    {CustomIcon}
                </View>
                <Text style = {isDarkBlue ? styles.cardText2 : styles.cardText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        width: 200,
        backgroundColor: blue1, 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 50,
        margin: 5,
    },
    cardContainer2: {
        height: 200,
        width: 200,
        backgroundColor: '#2362df', 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 50,
        color: 'white',
        margin: 5,
    },
    cardContainerLight: {
        backgroundColor: '#2362df', 
    },
    cardContainerDark: {
        backgroundColor: '#e6ecff', 
    },
    cardIconContainer: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 50, 
    }, 
    cardIconContainer2: {
        backgroundColor: '#2362df',
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 50, 
    }, 
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#48525e',
    },
    cardText2: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
    }   
})

export default Card