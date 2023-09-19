import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";
import { AntDesign } from '@expo/vector-icons'; 

const Todo1 = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight: "bold", color:'white'}}>
                {name}
            </Text>
            <View style={{flexDirection:"row", gap: 10}}>
                <TouchableOpacity style={styles.sbutton}>
                    <Text style={styles.btext}>Delete</Text>
                    <AntDesign name="delete" size={16} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.sbutton}>
                    <Text style={styles.btext}>Edit</Text>
                    <AntDesign name="edit" size={16} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        marginTop: 30,
        justifyContent: "space-between", 
        padding: 15, 
        borderRadius: 10, 
        backgroundColor: '#bababa',
        borderColor: 'black',
    },
    sbutton: {
        bordercolor: "black",
        borderRadius: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 35,
        width: 80
    },
    btext:{
        fontSize: 'bold',
        fontSize: 15
    }

})

export default Todo1