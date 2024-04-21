import { useState } from "react";
import Employee from "./components/Employee";

function App() {
  let [count, setCount] = useState(0);
  const addCount=()=>{
    setCount(count+1)
  }

  let emp = [{name:'Steve  Jobs',age:36},
             {name: 'Musk',age:45}]

  return (
    <div>
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>
          (
            <Employee key = {index} {...obj}/>
          )
        )
      }
    </div>
  );
}

export default App;
