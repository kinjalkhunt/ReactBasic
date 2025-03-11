import React, { useEffect } from 'react'

export default function Counter1({number}) {
    useEffect(() => {
        console.log("Functional component DidMount: At First Time Rendering");
        console.log("Functional component DidUpdate: When Number Update");
        return () => {
            console.log("Component Will Unmount: When Remove Number in Parent");
            
        }
    },[number])
  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}
