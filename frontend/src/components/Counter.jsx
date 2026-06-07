import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement =()=>{
      setCount(count+1);
    }
    const handleDecrement=()=>{
      setCount(count-1);

    }
    const handleReset= () =>{
      setCount(0);

    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(handleIncrement)}>Increment</button>
        <button onClick={()=> setCount( handleReset)}>reset</button>
        <button onClick={()=>setCount ( handleDecrement)}>decrement</button>

    </div>
  )
}

export default Counter