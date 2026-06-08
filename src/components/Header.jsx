import { useState } from "react";

function Header({ addTodo }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "") return;
    addTodo({ name, desc });
    setName("");
    setDesc("");
  };

  return (
    <div className="header">
      <h1 className="todo-title">Todo App!!</h1>
      <div className="todo-input-box">
        <input
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="add-btn" onClick={handleSubmit}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default Header;