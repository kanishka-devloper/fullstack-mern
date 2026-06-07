import React,{useEffect, useState} from 'react'

const Effects = () => {
    useEffect
    const [count,setCount]=useState(0);
    const [Like,setLike]=useState(0);
    const [data,setData]=useState([]);
    

    useEffect(()=>{
        console.log("components Re-render")

    },[count])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((user)=>setData(user))
    },[])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <h1>{Like}</h1>
         <button onClick={()=> setLike(Like+1)}>💖</button>
         {data.map((user)=>(
            <p key={user.id}>{user.name}</p>
         ))}

    </div>
  )
}

export default Effects