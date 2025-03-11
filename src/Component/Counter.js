// import React, { Component } from 'react'

import { useState } from "react";

// export default class Counter extends Component {
//     componentDidUpdate(prevprops, prevState){
//         // console.log("prevNumber",prevprops.number);
//         // console.log("increment Number",this.props.number);
        
        
//         if(prevprops.number !== this.props.number) {
//           // console.log("prevNumber",prevprops.number);

//             console.log("Component Did Update",this.props.number);
//           }
//     }
//   render() {
//     return (
//       <div>
//        <h1>{this.props.number}</h1>
//       </div>
//     )
//   }
// }
// import { useState } from "react";

// const Counter = () => {
//   const [isVisible, setIsVisible] = useState(true);

// // const handleVisibleText = () => {
// //   setIsVisible(!isVisible)
// // }

//   return (
//     <div>
//       {/* <button onClick={handleVisibleText}>Toggle</button> */}
//       {isVisible && <p>Hello! I am visible.</p>}
//       <button
//          className="px-4 py-2 bg-blue-500 text-white rounded"
//          onClick={() => setIsVisible(!isVisible)}
//        >
//          {isVisible ? "Hide text" : "Show text"} 
//        </button>
//     </div>
//   );
// };

// export default Counter;


//  import React, { useState } from 'react'

// function Counter() {
//   const [data, setData] = useState("Hello React");
//   return (
//     <div>
//       <h1>WelCome Hooks</h1>
//       <br></br>
//       <h1>{data}</h1>
//       <button onClick={() => setData("Hello Student")}>Clickme</button>
//     </div>
//   )
// }

// export default Counter
// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () =>{
//     setCount(count +1 );
// }
// const handleDecrement = () =>{
//   setCount(count -1 );
// }
// const handleSetCount = () =>{
//   setCount(0);
// }
//  return (
//     <div className="flex flex-col items-center space-y-4 p-5">
//       <h2 className="text-xl font-bold">Counter: {count}</h2>
//       <div className="flex space-x-2">
//         <button 
//           className="px-4 py-2 bg-green-500 text-white rounded" 
//           onClick={handleIncrement}
//         >
//           Increase
//         </button>
//         <button 
//           className="px-4 py-2 bg-red-500 text-white rounded" 
//           onClick={handleDecrement}
//         >
//           Decrease
//         </button>
//         <button 
//           className="px-4 py-2 bg-gray-500 text-white rounded" 
//           onClick={handleSetCount}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;
// import { useState } from "react";

// const Counter = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <div className="flex flex-col items-center space-y-4 p-5">
//       {isVisible && <p className="text-lg font-semibold">Hello, I am visible! 👋</p>}
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setIsVisible(!isVisible)}
//       >
//         {isVisible ? "Hide text" : "Show text"} 
//       </button>
//     </div>
//   );
// };

// export default Counter;

// // import { useState } from "react";

// const ToggleBackground = () => {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-screen ${
//         isDark ? "bg-gray-800 text-white" : "bg-white text-black" 
//       }`}
//     >
//       <h2 className="text-xl font-bold">Click the button to change background!</h2>
//       <button
//         className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
//         onClick={() => setIsDark(!isDark)}
//       >
//         {isDark ? "Light Mode": "Dark Mode"}
//       </button>
//     </div>
//   );
// };

// export default ToggleBackground;

// const ToggleBackground = () => {
//   const [mode, setMode] = useState(0); 

//   // Define background and text colors based on mode
//   const backgroundColors = ["bg-white text-black", "bg-green-500 text-white", "bg-gray-800 text-white"];
//   const buttonLabels = ["Green Mode", "Dark Mode", "Light Mode"];

//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${backgroundColors[mode]}`}
//     >
//       <h2 className="text-xl font-bold">Click the button to change background!</h2>
//       <button
//         className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
//         onClick={() => setMode((prevMode) => (prevMode + 1) % 3)} 
//       >
//         {buttonLabels[mode]}
//       </button>
//     </div>
//   );
// };

// export default ToggleBackground;

// import React, { useState } from 'react';

const Rating1 = () => {
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    setRating(rating + 1);
  };

  return (
    <div>
      <h2>Rate this Product</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            // key={index}
            onClick={() => handleClick(index)}
            style={{
              cursor: 'pointer',
              color: index < rating ? 'gold' : 'gray',
              fontSize: '2rem',
            }}
          >
            ☆
          </span>
        ))}
      </div>
      <p>Your Rating: {rating} / 7</p>
    </div>
  );
};

export default Rating1;


// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const handleChanges = () => {
//        return count > 0 ? "bg-green-500" : count < 0 ? "bg-red-500" : "bg-white";
// }

//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${handleChanges()}`}
//     >
//       <h1 className="text-4xl font-bold">{count}</h1>
//       <div className="mt-4 space-x-4">
//         <button
//           className="px-4 py-2 bg-green-700 text-white rounded"
//           onClick={() => setCount(() => count + 1)}
//         >
//           Increment
//         </button>
//         <button
//           className="px-4 py-2 bg-red-700 text-white rounded"
//           onClick={() => setCount(() => count - 1)}
//         >
//           Decrement
//         </button>
//         <button
//           className="px-4 py-2 bg-gray-700 text-white rounded"
//           onClick={() => setCount(0)}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
