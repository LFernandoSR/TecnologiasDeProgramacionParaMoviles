import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Card = ({ text1, text2, text3, image }) => {
               
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image}/>
            <View style={styles.datos}>
                <Text style={styles.type}>{text1}</Text>
                <Text style={styles.name}>{text2}</Text>
                <View style={styles.price}>
                    <TouchableOpacity style={styles.icon}>
                        <MaterialIcons name="attach-money" size={20} color="#ffdf6b" />
                    </TouchableOpacity>
                    <Text style={styles.number}>{text3}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 370,
        width: 250,
        backgroundColor: "#e6e6e6", 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 20,
        margin: 10,
    },
    image: {
        width: 200, 
        height: 230,
        backgroundColor: "#e6e6e6", 
    },
    datos: {
        gap: 5,
        marginBottom: 10
    },
    type: {
        color: "#8d8d8d",
        fontSize: 14,
    },
    name: {
        color: "#303030",
        fontSize: 17,
        fontWeight: "bold"
    },
    number: {
        color: "#303030",
        fontSize: 14,
        fontWeight: "bold"
    },
    price: {
        flexDirection:'row'
    },
    icon: {
        backgroundColor: '#ff9d05',
        width: 25,
        height: 25,
        marginRight: 7,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 50, 
    }, 
})

export default Card