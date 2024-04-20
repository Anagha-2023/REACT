import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  let [count, setCount] = useState(0);
  const addCount=()=>{
    setCount(count+1)
  }

  let obj = {
   title : '1st',
   count 
  }

  return (
    <div>
      <button onClick={addCount}>Add</button>
      <Counter {...obj}/>
      <Counter title = '2nd' count={count}/>
    </div>
  );
}

export default App;
