//file for custom hook to manage todo items

import { useEffect, useState } from "react";
import { getTodos, createTodo } from "../services/api_service";

export function useTodos() {

  const [todos, setTodos] = useState([]); //manages the state of todo items
  const [loading, setLoading] = useState(false); //manages loading state
  const [error, setError] = useState(null); //manages error state

  const fetchTodos = async () => {   //fetches todo items from the API and changes the states
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (description) => {  //adds a new todo item in API and updates the state
    try {
      setLoading(true);
      await createTodo(description);
      await fetchTodos();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    clearError: () => setError(null),
    addTodo,
  };
}
