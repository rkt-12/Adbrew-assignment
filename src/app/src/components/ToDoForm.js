//file for adding new todo items

import { useState } from "react";

export default function TodoForm({ onAdd, loading }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    onAdd(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo">ToDo: </label>
        <input
          id="todo"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "5px" }}>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add ToDo!"}
        </button>
      </div>
    </form>
  );
}
