import React, { useCallback, useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  const handleClick = useCallback(()=>{
    console.log('Button Clicked');
  },[])

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>count <10 && setCount(count+1)}>Increment</button>
      <button onClick={handleClick}>Log Message</button>
    </div>
  )
}

export default App
