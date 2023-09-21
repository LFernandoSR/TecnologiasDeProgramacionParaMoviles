import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Todo1 from "./src/componentes/Todo";
import CustomButton from "./src/componentes/CustomButton";
import TodoInput from "./src/componentes/TodoInput";
import {useTodos} from "./src/hooks/useTodos"

export default function App() {
  const {
    inputValue,
    setInputValue,
    todos,
    setTodos,
    edit,
    setEdit,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleEdit,
    handleEditTodo,
  } = useTodos();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{justifyItems:"center", paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{fontSize: 40, fontWeight:"bold", textAlign: "center", color: 'white' }}>
           My Todo List
        </Text>

        <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          {edit.isEdit ? (
            <CustomButton text='Edit task' onPress={handleEditTodo} />
          ) : (
            <CustomButton text='Add task' onPress={handleAddTodo} />
          )}
        </View>

        <FlatList
          data={todos} 
          keyExtractor={(item) => item.id}
          renderItem={({item: {id, name, isCompleted, createAt, updatedAt} }) => (
            <Todo1 
            id={id} 
            name={name} 
            isCompleted={isCompleted} 
            updatedAt={updatedAt}
            createAt={createAt}
            isEdit={handleEdit}
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
  },
});