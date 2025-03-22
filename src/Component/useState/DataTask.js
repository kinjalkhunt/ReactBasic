 import React, { useState } from 'react'

function DataTask() {
  const [data, setData] = useState("Hello React");
  return (
    <div>
      <h1>WelCome Hooks</h1>
      <br></br>
      <h1>{data}</h1>
      <button onClick={() => setData("Hello Student")}>Clickme</button>
    </div>
  )
}

export default DataTask