import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";
import Todo1 from "./src/componentes/Todo";
import CustomButton from "./src/componentes/CustomButton";
import TodoInput from "./src/componentes/TodoInput";

export default function App() {

const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);

const handleAddTodo = () => {
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
          renderItem={(({item: {name} }) =>
            <Todo1 name={name} />
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