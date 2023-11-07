import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButtonText";

const Todo1 = ({ name, id, handleDelete, handleInfo, isCompleted, handleCompleted, createAt, updatedAt, handleEdit }) => {
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
            
            <View style={{flexDirection:"row", gap: 5}}>
                <CustomButton text='Edit' onPress={() => handleEdit(id)} />     
                <CustomButton text='Delete' light onPress={() => handleDelete(id)}/>
                <CustomButton 
                    text={isCompleted ? "Done" : "Complete"} 
                    onPress={() => handleCompleted(id)}
                />
                <CustomButton
                    text='info'
                    light
                    onPress={() => handleInfo(id)}
                />
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