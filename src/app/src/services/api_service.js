//file for interacting with the backend API

const API_URL = process.env.REACT_APP_API_URL;  //for local we can hardcode it to 'http://localhost:8000' in .env file

export async function getTodos() {  //function to get todo items from the API
  const res = await fetch(`${API_URL}/todos/`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export async function createTodo(description) {  //function to create a new todo item in the API
  const res = await fetch(`${API_URL}/todos/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
  });

  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}
