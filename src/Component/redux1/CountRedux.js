import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './action/Action';

function CountRedux() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    console.log(">>>>>>>", count);
    
  return (
    <div>
      <h1 className='text-bold text-2xl'>Hello React-Redux</h1>
      <button className='border' onClick={() => dispatch(Increment())}>Increment</button>
      <h1>{count}</h1>
      <button className='border'  onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default CountRedux
