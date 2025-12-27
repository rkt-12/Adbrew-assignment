//file for displaying the list of todo items when site is refreshed

export default function TodoList({ todos }) {
  if (!todos.length) return <p>No todos yet.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.description}</li>
      ))}
    </ul>
  );
}
