
import React, { useContext } from 'react'
import {MyContext} from '../Component/Context'

function Context3() {
    const use = useContext(MyContext)
  return (
    <div>
      <h1>hello I am Context3..... {use}</h1>
    </div>
  )
}

export default Context3
