import "./App.css";
import { useTodos } from "./hooks/toDoHook";
import TodoList from "./components/ToDoList";
import TodoForm from "./components/ToDoForm";
import ErrorBanner from "./components/ErrorNotify";

export default function App() {

  const { todos, loading, error, clearError, addTodo } = useTodos();  // hook to manage todo list states

  return (
    <div className="App">
      <h1>List of TODOs</h1>

      {error && (
        <ErrorBanner message={error} onClose={clearError} />
      )}

      <TodoList todos={todos} />

      <h1>Create a ToDo</h1>
      <TodoForm onAdd={addTodo} loading={loading} />
    </div>
  );
}
