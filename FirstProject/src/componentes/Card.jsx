import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const RateCard = ({type}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'#5f5f5f', fontWeight: "bold"}}>Rate type</Text>
            <Text style={{color:'black', fontWeight: "bold", fontSize: 20, marginTop: 20}}>{type}</Text>         
            <AntDesign 
                name="checkcircleo" 
                size={30} 
                color="orange" 
                style={{marginTop: 50, marginLeft: 110}}
            />
        </View>
    )
}
export default RateCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        width: 180, 
        height: 200,
        borderRadius: 20,
        margin: 5,
        padding: 15,
    },

})