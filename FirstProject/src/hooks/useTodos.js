import React, { useState, useReducer } from "react";
import { handleShowError } from "../helpers/showError";

export const useTodos = () => {
  const initialState = {
    inputValue: '',
    todos: [],
    editMode: false,
    editTodoId: null, 
    info: [],
    seeModal: false,
  }


  function reducer(state, action){
    switch(action.type){
        case "SET_INPUT_VALUE":
          return { ...state, inputValue: action.payload };
        case "ADD_TODO":{
            if (state.inputValue === "") {
              handleShowError('Debes ingrear un nombre a la tarea')
              return state
            };
            let valor = state.inputValue
            if(valor.length > 10){
              handleShowError('Debes ingresar menos de 10 caracteres')
              return state
            }    
            const existingTodo = state.todos.some(
              (todo) => todo.name.toLowerCase() === state.inputValue.toLowerCase()
            )
            if(existingTodo){
              handleShowError(
                'Ya existe una tarea con ese nombre'
              )
                return state
            }
            if (state.editMode) {
              const updatedTodos = state.todos.map((todo) => {
                if (todo.id === state.editTodoId) {
                  return {
                    ...todo,
                    name: state.inputValue,
                    date: 'Updated at: ' + new Date().toISOString(),
                  };
                }
                  return todo;
              });
              return {
                ...state,
                todos: updatedTodos,
                editMode: false,
                editTodoId: null,
                inputValue: '',
              };
            } else {
              const newTodo = {
                id: new Date().toISOString(),
                name: state.inputValue,
                isCompleted: false,
                date: '',
                createdAt: new Date().toISOString(),
              };
              return { 
                ...state, 
                todos: [...state.todos, newTodo],
                inputValue: '',
              };
            }
        }
        
        case "DELETE_TODO":
          const todoIdToDelete = action.payload;
          const filteredArray = state.todos.filter(
              (todo) => todo.id !== todoIdToDelete
          );
          return { ...state, todos: filteredArray };

        case "COMPLETED_TODO":
          const mappedArray = state.todos.map((todo) => {
              if (todo.id === action.payload) {
                return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                };
              }
                return todo;
            });
            return { ...state, todos: mappedArray };
               
        case "EDIT_TODO":
          const todoToEdit = state.todos.find(
            (todo) => todo.id === action.payload
          );
            if (todoToEdit) {
              return {
                ...state,
                editMode: true,
                editTodoId: action.payload,
                inputValue: todoToEdit.name,
              };
            }
            return state;

        case "SET_INFO":
          const info = state.todos.find((todo) => todo.id === action.payload)
          return { ...state, info, seeModal: true };

        case "TOGGLE_MODAL":
          return { ...state, seeModal: !state.seeModal };

        default:
          return state;
    }  
}

  const [state, dispatch] = useReducer(reducer, initialState);


  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO" });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  const handleCompletedTodo = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  }

  const handleEditTodo = (id) => {
    dispatch({ type: "EDIT_TODO", payload: id });
  };

  const handleInfo = (id) => {
    dispatch({ type: "SET_INFO", payload: id });
  };

  return {
    state, dispatch
  }

}