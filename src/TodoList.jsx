import React from "react";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <div class="box2">
      <table border="2">
        {todos.map((todo) => (
          <tr>
            {" "}
            <td key={todo.id}></td>
            <td> {todo.text}</td>
            <td>
              <button class="b1" onClick={() => onEdit(todo.id, todo.text)}>
                Edit
              </button>
            </td>
            <td>
              {" "}
              <button class="b2" onClick={() => onDelete(todo.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TodoList;
