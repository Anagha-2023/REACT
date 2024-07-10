import React, { useEffect, useState } from 'react'

function App() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    const intervelId = setInterval(() => {
      setCount(prevCount=>prevCount+1);
    },1000);

    setTimeout(()=>{
      clearInterval(intervelId)
    },5000)
    return()=>{
      clearInterval(intervelId)
    }
  },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default App

