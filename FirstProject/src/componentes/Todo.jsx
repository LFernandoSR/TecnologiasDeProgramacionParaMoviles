import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ name, id, handleDelete, isCompleted, handleComplete, createAt, updatedAt, isEdit }) => {
    return (
        <View style={[ styles.container, isCompleted && styles.todoCompleted]}>
            <Text style={[{ fontSize: 15, fontWeight: 'bold' }, isCompleted && styles.textCompleted]}>
                {name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 5 }}>
                <Text style={{ fontSize: 14 }}>{`Created: \n${createAt}`}</Text>
                    {updatedAt !== '' && (
                        <Text style={{ fontSize: 14, justifyContent: 'center', alignItems: 'center' }}>{`Updated: \n${updatedAt}`}</Text>
                    )}
            </View>
            
            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton text='Edit' onPress={() => isEdit(id)} />     
                <CustomButton text='Delete' light onPress={() => handleDelete(id)}/>
                <CustomButton text={isCompleted ? "Done" : "Complete"} 
                onPress={() => handleComplete(id)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column", 
        marginTop: 20,
        justifyContent: 'space-between', 
        padding: 15, 
        borderRadius: 5, 
        backgroundColor: '#2d705f',
        borderColor: 'white',
        alignItems: 'center'
    },
    todoCompleted: {
        backgroundColor: 'orange',
    },
    textCompleted: {
        textDecorationLine: "line-through",
    },
})

export default Todo1