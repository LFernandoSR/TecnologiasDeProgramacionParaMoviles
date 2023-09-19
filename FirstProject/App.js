import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Constants from "expo-constants";
import Todo1 from "./src/componentes/Todo";
import CustomButton from "./src/componentes/CustomButton";
import TodoInput from "./src/componentes/TodoInput";

export default function App() {

const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);

const handleShowError = (error) =>
  Alert.alert(
    'Error', 
    error,
    [{ text: 'Aceptar', }] 
  );

const handleAddTodo = () => {
  if (inputValue === '') return handleShowError('Debe incluir un nombre')

  const existingTodo = todos.some(
    (todo) => todo.name.toLowerCase() === inputValue.toLowerCase()
  )

  if (existingTodo) {
    return handleShowError( 
      'Ya existe una tarea con ese nombre'
    )
  }

  setTodos([
    ...todos,
    {
      id: new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
    },
  ]);
  setInputValue('');
};

  const handleDeleteTodo = (todoId) => {
    const filteredArray = todos.filter(
      (todo) => todo.id !== todoId
    )
    setTodos(filteredArray)
  }

  const handleCompleteTodo = (todoId) => {
    const mappedArray = todos.map((todo) =>{
      if(todo.id === todoId){
        return {
          ...todo,
          isCompleted: true
        };
      }
      return todo;
    })
    setTodos(mappedArray)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{justifyItems:"center", paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{fontSize: 40, fontWeight:"bold", textAlign: "center", color: 'white' }}>
            Todo List
        </Text>

        <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton text='Add task' onPress={handleAddTodo} />
        </View>

        <FlatList
          data={todos} 
          keyExtractor={(item) => item.id}
          renderItem={({item: {id, name, isCompleted} }) => (
            <Todo1 
            id={id} 
            name={name} 
            isCompleted={isCompleted} 
            handleDelete={handleDeleteTodo} 
            handleComplete={handleCompleteTodo}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a6355",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
  },
});