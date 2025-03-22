// when use contextApi then we need to three things ==> 1) provider 2) createContext 3) consumer
// provider is the place where we will store our data
// context is the place where we will use our data
// consumer is the place where we will use our data
// we can use context api in two ways ==> 1) using context api with class component
// 2) using context api with functional component
// context api is used to share data between different components in a react application
// jyare context api ne je component ma use karvi chhe tema return ma koi function banavi data pass karavi shakay ane koi ek karta vadhu data pass karavva hoy tyare ek karta vadhu function ni andar function call karvama aave chhe like that js functionality (callback hell)


// when use Context hook then we need to three things ===> 1) Provider 2) createContect 3) useContext
// provider is the place where we will store our data
// context is the place where we will use our data
// useContext is the place where we will use our data


import React, { createContext } from 'react'
import Context3 from './Context3'
// import Context2 from '3./Context2'

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
