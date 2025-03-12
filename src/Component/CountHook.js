// What is custom hook?
// Ans...Custom hooks are a feature in React that allows you to extract and reuse stateful logic between components. They are essentially functions that start with the word "use" and can contain state, effects, and other hooks.
// Why Use Custom Hooks?
// Ans... to remove the duplicatedlogic in Components and we Can extract that logic to custom hook
// Custom hook etle ek js function tenu naam pan "use" key word thi j karvu pade chhe jem aapne bija hooks no use karie chhie tem j aapne custom hooks no use kari shakie chhie
// Example of Custom Hook
// jyare koi ek component nu logic bija component ma varmvar use karvanu thavanu hoi tyare custom hooks banavi tene render karavi shakay

// Example of Custom Hook
// import React from 'react';
// import useCount from './useCount';

// function CountHook() {
//     const [count, handleCount] = useCount(); // <-- Destructure correctly

//     return (
//         <div className="App">
//             <h1>Example Custom Hook</h1>
//             <h1>count: {count}</h1>
//             <button onClick={handleCount}>Click Me</button>
//         </div>
//     );
// }

// export default CountHook;


import React from 'react';
import useFetchData from './useFetchData';

const MyComponent = () => {
  const { data, error, loading } = useFetchData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {data?.quotes?.map((quote, index) => (
          <li key={index}>{quote.quote}</li> 
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
