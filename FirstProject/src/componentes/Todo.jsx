import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ name, id, handleDelete, isCompleted, handleComplete }) => {
    return (
        <View style={[ styles.container, isCompleted && styles.todoCompleted]}>
            <Text style={[{ fontSize: 20 }, isCompleted && styles.textCompleted]}>
                {name}
            </Text>
            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton text='Delete' light onPress={() => handleDelete(id)}/>
                <CustomButton text='Edit' light />
                <CustomButton text={isCompleted ? "Done" : "Complete"} 
                onPress={() => handleComplete(id)}/>
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
    },
    todoCompleted: {
        backgroundColor: 'orange',
    },
    textCompleted: {
        textDecorationLine: "line-through",
    },
})

export default Todo1