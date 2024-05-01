import React from 'react'

function App() {
  const data = ["jack","Rose"]
  return (
      <>
      <h1>Names</h1>
      <ul>
        {data.map((items,index)=>{
          return(
            <li key={index}>{items}</li>
          )
        })}
      </ul>
      </>
  )
}

export default App
