import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incremet</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
      <button onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
