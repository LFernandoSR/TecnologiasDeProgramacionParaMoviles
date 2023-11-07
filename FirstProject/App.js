import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Todo1 from "./src/componentes/Todo";
import CustomButtonText from "./src/componentes/CustomButtonText";
import TodoInput from "./src/componentes/TodoInput";
import InfoModal from "./src/componentes/infoModal";
import {useTodos} from "./src/hooks/useTodos";
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const {state, dispatch} = useTodos();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{justifyItems:"center", paddingHorizontal: 20, paddingTop: 10}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-around"}}>
          <Text style={{
            fontSize: 40, 
            fontWeight:"bold", 
            textAlign: "center", 
            color: 'white', 
            marginBottom: 15,
          }}>
              My do List
          </Text>
          <FontAwesome5 name="tasks" size={35} color="silver" />
        </View>

        <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
          <TodoInput
            value={state.inputValue}
            onChangeText={(value) => dispatch({ type: "SET_INPUT_VALUE", payload: value })}
          />
          <CustomButtonText
            text={(state.editMode ? 'Edit task' : 'Add task')}
            onPress={() => dispatch({ type: "ADD_TODO", payload: state.inputValue})}
          />
        </View>

        <View>
          <InfoModal info={state.info} seeModal={state.seeModal} setSeeModal={() => dispatch({ type: "TOGGLE_MODAL" })} />
        </View>

        <FlatList
          data={state.todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { name, id, isCompleted, date } }) =>
            <Todo1
              name={name}
              id={id}
              handleDelete={() => dispatch({ type: "DELETE_TODO", payload: id })}
              isCompleted={isCompleted}
              handleCompleted={() => dispatch({ type: "COMPLETED_TODO", payload: id })}
              handleEdit={() => dispatch({ type: "EDIT_TODO", payload: id })}
              date={date}
              handleInfo={() => dispatch({ type: "SET_INFO", payload: id })}
            />
          }
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