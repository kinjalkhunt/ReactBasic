import { useState, useEffect } from "react";

const EffectState = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-64 mx-auto">
      <h1 className="text-xl font-bold">Window Width</h1>
      <p className="text-2xl font-semibold text-blue-500">{width}px</p>
    </div>
  );
};

export default EffectState;