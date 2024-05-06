import React, { useState } from 'react'

function App() {
  const [value,setValue] = useState('');
  const [result,setResult] = useState('')
  const handleChange = () => {
    setResult(value);
  }
  return (
    <div>
      <input type='text' value={value} onChange={(event)=>setValue(event.target.value)} placeholder='Type here...'></input>
      <button onClick={handleChange}>Submit</button>
      {result && <h1>{result}</h1>}
    </div>
  )
}

export default App
