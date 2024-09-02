import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditingId(null);
    setEditText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  return (
    <div class="container">
      <h1 class="text-green-100">Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} onEdit={startEdit} onDelete={deleteTodo} />
      {editingId !== null && (
        <div>
          <input
            class="edit"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button class="up" onClick={() => updateTodo(editingId, editText)}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
