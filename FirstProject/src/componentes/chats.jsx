import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Chat = ({ image, name, message, hour }) =>{
    return (
        <View style={styles.Container}>
            <Image source={image} style={styles.image}/>    
            <View style={styles.ChatInfo}>
                <Text style={styles.ChatName}>{name}</Text>
                <Text style={styles.Chatmessage}>{message}</Text>
            </View>           
            <View style={{flexDirection:"row"}}>
                <Text style={styles.Chathour}>{hour}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({   
    Container: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        margin: 5,
    },
    image: {
        width: 35,
        height: 35, 
        borderRadius: 40, 
    },
    ChatName: {
        fontSize: 15,
        color: 'black',
        fontWeight: "bold",
    },
    Chatmessage: {
        fontSize: 14,
        color: 'gray'
    },
    Chathour: {
        color: "gray",
        marginTop: 5,
        fontSize: 15,
    },
})

export default Chat