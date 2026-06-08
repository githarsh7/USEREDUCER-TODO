# React Todo App using useReducer

A simple Todo application built with React using the `useReducer` hook for state management. This project demonstrates how to organize application logic using reducers, custom hooks, and reusable components.

## Features

- Add todos
- Delete todos
- Mark todos as completed
- State management using `useReducer`
- Custom hook implementation
- Clean component structure
- Beginner-friendly React project

## Tech Stack

- React
- JavaScript (ES6+)
- CSS

## Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   └── TodoCard.jsx
│
├── hooks/
│   └── useTodo.jsx
│
├── reducers/
│   └── Reducer.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/githarsh7/REACT-TODO-USEREDUCER.git
```

Navigate to the project directory:

```bash
cd REACT-TODO-USEREDUCER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally on:

```bash
http://localhost:5173
```

## useReducer Overview

This project uses React's `useReducer` hook to handle todo state updates in a structured and scalable way.

Example reducer logic:

```javascript
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};
```

## Custom Hook

The `useTodo.jsx` hook centralizes todo-related logic and reducer handling, making the components cleaner and easier to maintain.

## Components

### Header.jsx

Displays the application title and basic UI structure.

### Main.jsx

Handles todo input and renders the todo list.

### TodoCard.jsx

Represents individual todo items with actions like complete and delete.

## Available Scripts

### `npm run dev`

Runs the application in development mode.

### `npm run build`

Builds the application for production.

### `npm run preview`

Previews the production build locally.

## Learning Objectives

This project helps in understanding:

- React Hooks
- `useReducer`
- Custom Hooks
- Component-based architecture
- State management patterns
- Immutable state updates

## Future Improvements

- Edit todo functionality
- Local storage persistence
- Todo filtering
- Drag and drop support
- Responsive UI improvements


## Connect with Me 🤝 :
- LinkedIn : [HARSHAA SG](https://www.linkedin.com/in/harshaasg)  
- Gmail : harshaavardhan8@gmail.com

⭐ Feel free to fork this project and improve it!

---

## License

This project is open source and available under the MIT License.
