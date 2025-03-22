import { useState } from "react";

const Visible = () => {
  const [isVisible, setIsVisible] = useState(true);

// const handleVisibleText = () => {
//   setIsVisible(!isVisible)
// }

  return (
    <div>
      {/* <button onClick={handleVisibleText}>Toggle</button> */}
      {isVisible && <p>Hello! I am visible.</p>}
      <button
         className="px-4 py-2 bg-blue-500 text-white rounded"
         onClick={() => setIsVisible(!isVisible)}
       >
         {isVisible ? "Hide text" : "Show text"}
       </button>
    </div>
  );
};

export default Visible;


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