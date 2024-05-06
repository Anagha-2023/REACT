import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const emp = ["Jack", "Rose"];

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count > 0 && <p>{emp[count-1]}</p>}
    </div>
  );
}

export default App;
