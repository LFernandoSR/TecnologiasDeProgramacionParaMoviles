import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

const Stories = ({ text, image }) => {
               
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image}/>
            <View>
                <Text style = {styles.cardText}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        width: 200,
        backgroundColor: 'white', 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 50,
        margin: 5,
    },
    cardText: {
        fontSize: 15,
        color: 'gray',
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 40
    },
})

export default Stories