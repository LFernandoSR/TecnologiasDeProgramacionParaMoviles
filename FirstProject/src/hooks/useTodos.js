import { useState } from "react";
import { handleShowError } from "../helpers/showError";

export const useTodos = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState([{ id: '', isEdit: false }]);

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
            createAt: `${new Date().getDate()}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
            updatedAt: '',
        },
    ]);
    setInputValue('');
};

    const handleDeleteTodo = (todoId) => {
        const filteredArray = todos.filter(
          (todo) => todo.id !== todoId
        )
        setTodos(filteredArray)
    };

    const handleCompleteTodo = (todoId) => {
        const mappedArray = todos.map((todo) =>{
          if(todo.id === todoId){
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
        return todo;
        })
        setTodos(mappedArray)
    };

    const handleEdit = (id) => {
        setEdit({ isEdit: !edit.isEdit, id: id });
        if (!edit.isEdit) {
            setInputValue(todos.find((todo) => todo.id === id).name);
        } else {
            setInputValue('');
        }
    };

  const handleEditTodo = () => {
    if (inputValue === '')
      return handleShowError('Debes ingresar un nombre a la tarea');

      const updatedTodos = todos.map((todo) => {
        if (todo.id === edit.id) {
          return {
            ...todo,
            name: inputValue,
            updatedAt: `${new Date().getDate()}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()} 
${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          };
        }
        return todo;
      });
  
      setTodos(updatedTodos);
      setInputValue('');
      setEdit({ isEdit: !edit.isEdit, id: '' });
    };

    return {
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
    };
};