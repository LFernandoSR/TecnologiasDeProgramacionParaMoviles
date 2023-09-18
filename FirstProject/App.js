import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from "react-native";
import Constants from "expo-constants";
import {useState} from "react";

export default function App() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Todo List</Text>
      <View style={{ flexDirection: 'row', marginTop: 20, gap: 20}}>
        <TextInput 
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 20,
            flex: 1,
            borderRadius: 5,
            height: 40
          }}
        />
        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 5, width: 80, alignItems: 'center'}}>
          <Text>Add task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={TODOS}
        keyExtractor={(item) => item.id}
        renderItem={({{ item: {name} }} => <Todo name={name}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,

  },
});