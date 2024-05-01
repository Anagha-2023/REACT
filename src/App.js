import React from 'react'
import { useState } from 'react'
import Child from './Components/Child';

function App() {
  const [state,setState] = useState(false);

  return (
    <div>
      <button onClick={()=>setState(!state)}>Show/Hide</button>
      {state?<Child/>:null}
    </div>
  )
}

export default App
