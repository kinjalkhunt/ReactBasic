// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import DefaultLayOut from "./Component/layout/DefaultLayOut";

// function App() {
//   return (
//     <div className="bg-red-500">
//       <BrowserRouter>
//         <Toaster
//           position="bottom-right"
//           toastOptions={{
//             duration: 5000,
//             style: {
//               background: "#363636",
//               color: "#fff",
//             },
//           }}
//         />
//         <Routes>
//           <Route path="*" element={<DefaultLayOut/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
// import { useState } from 'react';

// import Navigation from './Component/Navigation.js';

// const App = () => {
// const [expenses, setExpenses] = useState([]);

// const addExpense = (expense) => {
//   setExpenses([...expenses, expense]);
// };

// const deleteExpense = (index) => {
//   const updatedExpenses = expenses.filter((_, i) => i !== index);
//   setExpenses(updatedExpenses);
// };

//   return (
//     <div >
//       {/* <h1 className="text-2xl font-bold mb-4">Daily My Home Expense Tracker</h1>
//       <ExpenseForm addExpense={addExpense} />
//       <TotalExpense expenses={expenses} />
//       <ExpenseList expenses={expenses} deleteExpense={deleteExpense} /> */}
//       {/* <QuizApp/>
//       <TotalExpense/> */}
//       <Navigation/>
//     </div>
//   );
// };

// export default App;




// import React, { Component } from 'react'
// import Counter from './Component/Counter';
// import Counter1 from './Component/Counter1';
// import ToggleText from './Component/Counter';
// import { Rating } from '@mui/material';
// import ToggleBackground from './Component/Counter';
// import QuizApp from './Component/Quiz';
// import Rating1 from './Component/Counter';
// import CountHook from './Component/CountHook'
// import MyComponent from './Component/CountHook'
// import HookUseRef from './Component/HookUseRef'
// import Counter from './Component/HookUseRef'
// import Context from './Component/Context'
// import UseReducer from './Component/UseReducer'
// import Navigation from './Component/Navigation'

// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   componentDidMount() {
//     console.log("Component DidMount : When Component Render First time");
//  }

//   componentWillUnmount() {
//     console.log("Component DidUnmount : When Component Remove From Dom");
//  }
//   increment = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         {/* <h1>{this.state.count}</h1> */}
//         {/* <button onClick={this.increment.bind(this)}>Clickme</button> */}
//         {/* <Counter number={this.state.count} /> */}
//         {/* <Counter1 number={this.state.count}/> */}

//         {/* <button onClick={() => this.increment()}>Clickme</button> */}

//         {/* <Counter/> */}
//         {/* <Counter/>
//         <ToggleBackground/> */}
//         {/* <QuizApp/> */}
//         {/* <Rating1/> */}
//          {/* <CountHook/>
//         <MyComponent/> 
//         <HookUseRef/>
//         <Counter/> */}
//         {/* <Context/> */}
//         {/* <UseReducer/> */}
//           <Navigation/>

//         {/* <ToggleText /> */}

//       </div>
//     )
//   }
// }
// // import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   componentDidMount() {
//     console.log("When component load First time : Componenet DidMount");
//   }
//   // componentDidUpdate(){
//   //   console.log("when Update this Component: Component DidUpdate");

//   // }

//   componentWillUnmount(){
//     console.log("when Remove Component from Dom : Component WillUnmount");

//   }

//   increment(){
//     this.setState({count: this.state.count +1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Props</h1>
//         <h1>{this.state.count}</h1>
//         <button className='border bg-green-200' onClick={() => this.increment()}>Clickme</button>
//       </div>
//     )
//   }
// }
// import React, { useState } from "react";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [counter, setCounter] = useState(1); // Unique task number

//   console.log("component will mount");

//   const addOrUpdateTask = () => {
//     // if (input.trim() === "") return;

//     if (editIndex !== null) {
//       // Update existing task
//       const updatedTasks = tasks.map((task) =>
//         task.id === editIndex ? { ...task, text: input } : task
//       );
//       console.log("IDGDF???????????",updatedTasks);
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       // Add new task with unique ID
//       setTasks([...tasks, { id: counter, text: input, completed: false }]);
//       setCounter(counter + 1); // Increment counter for next task
//       console.log("ADD TASK", ...tasks);
//    }
//     setInput("");
//   };

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const removeTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     if (editIndex === id) {
//       setEditIndex(null);
//       setInput("");
//     }
//   };

//   const editTask = (id) => {
//     const taskToEdit = tasks.find((task) => task.id === id);
//     if (taskToEdit) {
//       setInput(taskToEdit.text);
//       setEditIndex(id);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       <div className="flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="border p-2 rounded-md mr-2"
//           placeholder="Add or edit a task..."
//         />
//         <button
//           onClick={addOrUpdateTask}
//           className={`px-4 py-2 rounded-md text-white ${
//             editIndex !== null ? "bg-green-500" : "bg-blue-500"
//           }`}
//         >
//           {editIndex !== null ? "Save" : "Add"}
//         </button>
//       </div>
//       <ul className="mt-4 w-64">
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className={`flex justify-between items-center p-2 my-2 border rounded-md ${
//               task.completed ? "line-through text-gray-500" : ""
//             }`}
//           >
//             <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
//               <strong>{task.id}.</strong> {task.text}
//             </span>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => editTask(task.id)}
//                 className="bg-yellow-500 text-white px-2 py-1 rounded-md"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => removeTask(task.id)}
//                 className="bg-red-500 text-white px-2 py-1 rounded-md"
//               >
//                 X
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;



// import { useState } from "react";

// const App = () => {
//   const [like, setLike] = useState(false);
//   const [dislike, setDislike] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);
//   const [dislikeCount, setDislikeCount] = useState(0);

//   const handleLike = () => {
//     if (!like) {
//       setLike(true);
//       setLikeCount(likeCount + 1);
//       if (dislike) {
//         setDislike(false);
//         setDislikeCount(dislikeCount - 1);
//       }
//     } else {
//       setLike(false);
//       setLikeCount(likeCount - 1);
//     }
//   };

//   const handleDislike = () => {
//     if (!dislike) {
//       setDislike(true);
//       setDislikeCount(dislikeCount + 1);
//       if (like) {
//         setLike(false);
//         setLikeCount(likeCount - 1);
//       }
//     } else {
//       setDislike(false);
//       setDislikeCount(dislikeCount - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <h1 className="text-2xl font-bold">Like & Dislike</h1>
//       <div className="flex gap-4">
//         <button
//           onClick={handleLike}
//           className={`px-4 py-2 rounded ${
//             like ? "bg-green-500" : "bg-gray-300"
//           } text-white`}
//         >
//           👍 Like {likeCount}
//         </button>
//         <button
//           onClick={handleDislike}
//           className={`px-4 py-2 rounded ${
//             dislike ? "bg-red-500" : "bg-gray-300"
//           } text-white`}
//         >
//           👎 Dislike {dislikeCount}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
// import { useState } from "react";

// const images = [
//   "https://source.unsplash.com/600x400/?nature",
//   "https://source.unsplash.com/600x400/?ocean",
//   "https://source.unsplash.com/600x400/?mountains",
//   "https://source.unsplash.com/600x400/?forest",
// ];

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <h1 className="text-2xl font-bold">Image Carousel</h1>
//       <div className="relative w-[600px] h-[400px]">
//         <img
//           src={images[currentIndex]}
//           alt="Carousel"
//           className="w-full h-full object-cover rounded-lg shadow-lg"
//         />
//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
//         >
//           ⬅ Prev
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
//         >
//           Next ➡
//         </button>
//       </div>
//       <p className="text-lg">Image {currentIndex + 1} of {images.length}</p>
//     </div>
//   );
// };

// export default App;
// import { useState, useEffect } from "react";

// const App = () => {
//   const [time, setTime] = useState(10);
//   const [isActive, setIsActive] = useState(true);

//   useEffect(() => {
//     let timer;
//     if (isActive && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [time, isActive]);

//   const resetTimer = () => {
//     setTime(10);
//     setIsActive(true);
//   };

//   const toggleTimer = () => {
//     setIsActive((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-64 mx-auto">
//       <h1 className="text-2xl font-bold">Countdown: {time}s</h1>
//       <div className="flex gap-2">
//         <button
//           onClick={toggleTimer}
//           className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//         >
//           {isActive ? "Pause" : "Resume"}
//         </button>
//         <button
//           onClick={resetTimer}
//           className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
// import { useState, useEffect } from "react";

// const App = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-64 mx-auto">
//       <h1 className="text-xl font-bold">Window Width</h1>
//       <p className="text-2xl font-semibold text-blue-500">{width}px</p>
//     </div>
//   );
// };

// export default App;



// *********************
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Outlet1 from "./Component/Outlet";
// import Login from "./Component/header/page/Login";
// import AuthSuccess from "./Component/header/page/AuthSuccess";
// import Home from "./Component/header/Home";
// import About from "./Component/header/About";
// import Blog from "./Component/header/Blog";
// import PrivateRoute from "./Component/header/PrivateRoute";
// import Register from "./Component/header/page/Register";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Outlet1 />}>

//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/auth-success" element={<AuthSuccess />} />
//           <Route path="/register" element={<Register />} />
//           {/* Protected Routes (Only accessible when logged in) */}
//           <Route 
//             index 
//             element={
//               <PrivateRoute>
//                 <Home/>
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/about" 
//             element={
//               <PrivateRoute>
//                 <About />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/blog" 
//             element={
//               <PrivateRoute>
//                 <Blog />
//               </PrivateRoute>
//             } 
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React from "react";
import TodoList from "./Component/redux/ToDoList.js";
import CountRedux from "./Component/redux1/CountRedux.js";
import Cart from "./Component/redux-toolkit/Cart.js";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      {/* <TodoList/> */}
      {/* <CountRedux/>
       */}
       <Cart/>
    </div>
  );
};

export default App;
