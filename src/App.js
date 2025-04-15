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
// Savan Italiya
// 5:52 PM
// Service monitors
// Prometheous + Grafana for Redis , backend server, fron-end server, redis, postgres, rabbitmq, elastic search

// GUI Tools
// Kibana - Elastic Search
// Redis Insight - Redis
// DB visualizer - Postgres

// AWS Services
// EC2
// S3 Bucket
// SNS
// SES
// DevOps and Git Management
// Github
// Jenkins

// Search Engine
// Elastic Search
// Savan Italiya
// 5:57 PM
// *Feature (Core)*

// Data Analysis,
// Security Points (Auth)
// Third Party services (RabbitMQ + Redis + Firebase + Google Apis)
// Service monitors
// Doc storage and maintainability

// *Main Feature*
// Chat-support (CLG-SCA, STD-SGA)
// Notifications and Emails(not fixed and static emails)
// Financial (Payments)
// Collage Management
// Role Management (Module Wise)
// Module Management
// Applicant Management
// referral and Schemes
// Subject Management
// Feedback Managements
// Rating and Reviews
// admissions verifications (with document)
// Profile Managements
// Domain management (Production side)

// Databases
// Postgres
// Redis (Caching and Rate Limitation)
// RabbitMQ(Query based DB)

// Secuity Practices
// XSS validation
// Api Interpceptors
// Rate Limitation
// Input sanitization
// Joi Validations
// Strict middlewares
// Service monitors
// Prometheous + Grafana for Redis , backend server, fron-end server, redis, postgres, rabbitmq, elastic search

// GUI Tools
// Kibana - Elastic Search
// Redis Insight - Redis
// DB visualizer - Postgres

// AWS Services
// EC2
// S3 Bucket
// SNS
// SES

// DevOps and Git Management
// Github
// Jenkins

// Search Engine
// Elastic Search

import React from "react";
import TodoList from "./Component/redux/ToDoList.js";
import CountRedux from "./Component/redux1/CountRedux.js";
import Cart from "./Component/redux-toolkit/Cart.js";
import ToDo from "./Component/redux-toolkit/ToDo.js";
import FeedbackSystem from "./Component/UpandDownVote.js";
import { Auth } from "./Component/redux-toolkit/Auth.js";
import UserData from "./Component/redux/UserData.js";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
{/* <TodoList/>  */}
{/* <CountRedux/>
       */}
 {/* <Cart />  */}
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
{/* <ToDo/>
 */}
 {/* <FeedbackSystem/> */}
 {/* <Auth/> */}
 <UserData/>
</div>
  );
};

export default App;
