import React, { useRef } from 'react'

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    console.log("input value:",inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
