import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight: "bold", color:'white'}}>
                {name}
            </Text>
            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton text='Delete' light />
                <CustomButton text='Edit' light />
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
        borderRadius: 5, 
        backgroundColor: '#2d705f',
        borderColor: 'white',
    }

})

export default Todo1