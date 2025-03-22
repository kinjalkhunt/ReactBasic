import { useState } from "react";

const CountTask = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count +1 );
}
const handleDecrement = () =>{
  setCount(count -1 );
}
const handleSetCount = () =>{
  setCount(0);
}
 return (
    <div className="flex flex-col items-center space-y-4 p-5">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleDecrement}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={handleSetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountTask;



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
