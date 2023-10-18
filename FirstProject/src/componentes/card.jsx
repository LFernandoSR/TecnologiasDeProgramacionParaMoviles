import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card = ({ text1, text2, image }) => {
               
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image}/>
            <View style={styles.datos}>
                <Text style={styles.type}>{text1}</Text>
                <Text style={styles.name}>{text2}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 370,
        width: 250,
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 20,
        margin: 10,
        borderColor: "#56a2a3",
        borderWidth: 2
    },
    image: {
        width: 200, 
        height: 230,
    },
    datos: {
        gap: 5,
        marginBottom: 10
    },
    type: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center"
    },
    name: {
        color: "#26b1b8",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
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