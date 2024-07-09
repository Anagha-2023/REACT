import React, { useState } from 'react'

function About() {
  const [count,setCount] = useState(0)
  return (
    
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default About
