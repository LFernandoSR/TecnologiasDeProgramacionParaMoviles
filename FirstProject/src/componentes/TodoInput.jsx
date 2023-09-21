import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TodoInput = ({value, onChangeText}) => {
    return (
        <TextInput 
            style={styles.container}
            value={value}
            onChangeText={onChangeText}
            placeholder="Escrbe aquí tu tarea"
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1, 
        borderColor: 'white', 
        flex: 1,
        borderRadius: 10,
        color: 'white',
        padding: 10,
        height: 40
    }
})

export default TodoInput