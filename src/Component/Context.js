import React, { createContext } from 'react'
// import Context2 from './Context2'
import Context3 from './Context3'

export const MyContext = createContext()
function Context() {
    const name = 'xyz'
  return (
    <MyContext.Provider value={name}>
        <h1>Hello Context1</h1>
        <Context3/>
    </MyContext.Provider>
  )
}

export default Context
