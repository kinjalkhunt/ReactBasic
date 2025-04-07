// export const addTodo = (text) => ({
//     type: "ADD_TODO",
//     payload: text,
//   });
  
//   export const toggleTodo = (id) => ({
//     type: "TOGGLE_TODO",
//     payload: id,
//   });
  
//   export const removeTodo = (id) => ({
//     type: "REMOVE_TODO",
//     payload: id,
//   });
  // redux/reducer/Reducer.js

export const addTodo = (text) => {
  return (dispatch) => {
    // Simulate async behavior
    setTimeout(() => {
      dispatch({
        type: "ADD_TODO",
        payload: text,
      });
    }, 500); // 0.5s delay for simulation
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    // Could be an API call here
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };
};

export const removeTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };
};




// redux/reducer/Reducer.js

// export const fetchTodos = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
//       const data = await response.json();

//       dispatch({
//         type: "SET_TODOS",
//         payload: data.map((todo) => ({
//           id: todo.id,
//           text: todo.title,
//           completed: todo.completed,
//         })),
//       });
//     } catch (error) {
//       console.error("Failed to fetch todos:", error);
//     }
//   };
// };
