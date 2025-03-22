
import { useState } from "react";

const ToggleBackground = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold">Click the button to change background!</h2>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "Light Mode": "Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleBackground;


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