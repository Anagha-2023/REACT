import React, { useState } from 'react'

function App() {
  const [value,setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div>
      <input type='text' value={value} onChange={handleChange} placeholder='Type here...'></input>
      {value && <h1>{value}</h1>}
    </div>
  )
}

export default App
