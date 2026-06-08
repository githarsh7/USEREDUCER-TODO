import { useState } from "react";

function TodoCard({ todo, deleteTodo, updateStatus, editTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const [desc, setDesc] = useState(todo.desc);

  const getStatusClass = () => {
    if (todo.status === "Completed") return "completed";
    if (todo.status === "Not Completed") return "not-completed";
    return "pending";
  };

  const handleSave = () => {
    editTodo({ todoId: todo.id, newName: name, newDesc: desc });
    setIsEdit(false);
  };

  return (
    <div className="todo-card">

      {isEdit ? (
        <div className="todo-edit-box">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description:</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      ) : (
        <div className="todo-text">
          <h3>{todo.name}</h3>
          <p>{todo.desc}</p>
          <p className={`todo-status ${getStatusClass()}`}>
            {todo.status}
          </p>
        </div>
      )}

      <div className="todo-actions">
        <select
          className="status-select"
          value={todo.status}
          onChange={(e) =>
            updateStatus({ todoId: todo.id, todoStatus: e.target.value })
          }
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>

        {isEdit ? (
          <button className="update-btn" onClick={handleSave}>Save</button>
        ) : (
          <button className="update-btn" onClick={() => setIsEdit(true)}>Edit</button>
        )}

        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>

    </div>
  );
}

export default TodoCard;