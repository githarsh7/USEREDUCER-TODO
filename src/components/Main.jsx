import TodoCard from "./TodoCard";

function Main({
  todos,
  filter,
  deleteTodo,
  updateStatus,
  editTodo,
  setFilter,
}) {
  return (
    <main>
      <div className="filter-bar">
        <label>Status Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {todos.length === 0 ? (
        <p className="empty-text">
          --NO TODOS ADDED YET--
        </p>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
            editTodo={editTodo}
          />
        ))
      )}
    </main>
  );
}

export default Main;
