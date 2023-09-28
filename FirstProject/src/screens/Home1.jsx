import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { back1 } from "../../assets";

const Home1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Play and Win!</Text>
            <Text style={styles.textSubTitle}>
                Game for anyone who wants to try
            </Text>
            <Text style={styles.textSubTitle}>
                luck at guessing numbers 
            </Text>
            <Image 
                source={back1}
                style={{width: '100%', height: 400, marginTop: 30, marginBottom: 20}}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')} >
                <View style={styles.buttonDown}>
                    <Text style={{color: 'white', fontSize: 20, textAlign:"center", textAlignVertical: "center"}}>
                        Get started
                    </Text>
                </View>
            </TouchableOpacity>                               
        </View>                
    ) 
}
export default Home1

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#016f48',
        flex: 1,
        alignItems:"center",
    },
    textTitle:{
        color: '#fbfafc', 
        fontSize: 40,
        textAlign: "center",
        marginTop: 60,
    },
    textSubTitle:{
        color: '#79ad9b', 
        fontSize: 15,
        textAlign: "center",
        marginTop: 5,
    },
    buttonDown:{
        backgroundColor: '#f7793c', 
        borderRadius: 25, 
        width: 200, 
        height: 50,
        marginTop: 20,
        padding: 5
    },

})