import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import useTodo from "./hooks/useTodo";

function App() {
  const {
    todos,
    filter,
    isLoading,
    addTodo,
    deleteTodo,
    updateStatus,
    editTodo,
    setFilter,
  } = useTodo();

  return (
    <div className="app">
      <div className="todo-container">
        <Header addTodo={addTodo} />

        {isLoading ? (
          <p className="empty-text">Loading...</p>
        ) : (
          <Main
            todos={todos}
            filter={filter}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
            editTodo={editTodo}
            setFilter={setFilter}
          />
        )}
      </div>
    </div>
  );
}

export default App;