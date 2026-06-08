export const initialState = {
  todos: [],
  filter: "all",
};

export function todoReducer(state, action) {
  switch (action.type) {

    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, status: action.payload.todoStatus }
            : todo
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, name: action.payload.newName, desc: action.payload.newDesc }
            : todo
        ),
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}