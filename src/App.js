// // this is dynamic route set with lazy packeage for scalibility and flexibility 

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
// import EffectState from "./Component/useeffect/EffectState";
// import IsActive from "./Component/useeffect/IsActive";
// import ImageShow from "./Component/useState/ImageShow";
// import LikeDislike from "./Component/useState/LikeDislike";
// import ToDoTask from "./Component/useState/ToDo";
// import ReactLifecycle from "./Component/lifeCycleandProps/ReactLifecycle";
// import Props from "./Component/lifeCycleandProps/Props";

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
//                 <Home />
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

//  in practice we use this in our routes 


import React from "react";
import TodoList from "./Component/redux/ToDoList.js";
import CountRedux from "./Component/redux1/CountRedux.js";
import Cart from "./Component/redux-toolkit/Cart.js";
import ToDo from "./Component/redux-toolkit/ToDo.js";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
{/* <TodoList/> */ }
{/* <CountRedux/>
       */}
{/* <Cart /> */ }
{/* <Counter /> */ }
{/* <Counter /> */ }
{/* <ToggleBackground /> */ }
{/* <QuizApp /> */ }
{/* <Rating1 /> */ }
{/* <CountHook/>
        <MyComponent/> 
        <HookUseRef/>
        <Counter/> */}
{/* <Context/> */ }
{/* <UseReducer/> */ }
{/*  <Navigation /> */ }

{/* <ToggleText /> */ }
{/* <EffectState /> */ }
{/* <IsActive /> */ }
{/* <ImageShow /> */ }
{/* <LikeDislike /> */ }
{/* <ToDoTask /> */ }
{/* <ReactLifecycle /> */ }
{/* <Props /> */ }
<ToDo/>
</div>
  );
};

export default App;
