import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { todoReducer, initialState } from "../reducers/Reducer";

const API = "https://6a12b0af78d0434e0d5d5c08.mockapi.io/usereducertodos";

function useTodo() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(API);
      dispatch({ type: "SET_TODOS", payload: res.data });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (todoData) => {
    try {
      const res = await axios.post(API, {
        name: todoData.name,
        desc: todoData.desc,
        status: "Pending",
      });
      await getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (todoData) => {
    try {
      await axios.put(`${API}/${todoData.todoId}`, {
        status: todoData.todoStatus,
      });
      dispatch({ type: "UPDATE_STATUS", payload: todoData });
    } catch (err) {
      console.error(err);
    }
  };

  const editTodo = async (todoData) => {
    try {
      await axios.put(`${API}/${todoData.todoId}`, {
        name: todoData.newName,
        desc: todoData.newDesc,
      });
      await getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "all") return true;
    return todo.status === state.filter;
  });

  return {
    todos: filteredTodos,
    filter: state.filter,
    isLoading,
    addTodo,
    deleteTodo,
    updateStatus,
    editTodo,
    setFilter,
  };
}

export default useTodo;