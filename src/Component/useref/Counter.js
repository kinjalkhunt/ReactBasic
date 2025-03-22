import React, { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0); // Does NOT cause a re-render
  const [renderCount, setRenderCount] = useState(0); // Causes re-render

  const handleIncrement = () => {
    countRef.current += 1;
    console.log("Ref Value:", countRef.current); // Updates but doesn't re-render
  };

  return (
    <div>
      <h3>Mutable Ref Value: {countRef.current}</h3> 
      <button onClick={handleIncrement}>Increment Ref</button>

      <h3>Component Re-renders: {renderCount}</h3>
      <button onClick={() => setRenderCount(renderCount + 1)}>Re-render</button>
      {console.log(">>>>>>>>",countRef.current)
      }
    </div>
  );
};

export default Counter;
