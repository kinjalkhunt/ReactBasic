// import React, { useReducer } from 'react'

// function UseReducer() {
//     const reducer = (state, action) => {
//         console.log(state, action);
//         if (action.type === 'INCREMENT') {
//             return state + 1;
//         } else {
//             return state - 1;
//         }

//     }
//     const [count, dispatch] = useReducer(reducer, 0);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         </div>
//     )
// }

// export default UseReducer
// import React, { useReducer } from 'react';

// function UseReducer() {
//     const reducer = (state, action) => {
//         console.log(action.type);
//         switch (action.type) {
//             case 'INCREMENT':
//                 return state + 1;
//             case 'DECREMENT':
//                 return state - 1;
//             default:
//                 return state; // Return the current state if action type is unrecognized
//         }
//     };

//     const [count, dispatch] = useReducer(reducer, 0);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         </div>
//     );
// }

// export default UseReducer;
import React, { useReducer } from "react";

const initialState = {
  tasks: [],
  taskText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK_TEXT":
      return { ...state, taskText: action.payload };
    case "ADD_TASK":
      if (state.taskText.trim() === "") return state;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: state.taskText, completed: false },
        ],
        taskText: "", // Reset input field after adding task
      };
    case "REMOVE_TASK":
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={state.taskText}
        onChange={(e) => dispatch({ type: "SET_TASK_TEXT", payload: e.target.value })}
        placeholder="Enter a task..."
      />
      <button onClick={() => dispatch({ type: "ADD_TASK" })}>Add Task</button>

      <ul>
        {state.tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
