import React, { useContext } from 'react'
import { CounterContext } from '../11_Context/Counter';

function Counter() {
    const counterContext=useContext(CounterContext);
  return (
    <div>
        <button onClick={()=>counterContext.setCount(counterContext.count+1)}>Increment</button>
        <button onClick={()=>counterContext.setCount(counterContext.count-1)}>Decrement</button>
    </div>
  )
}

export default Counter