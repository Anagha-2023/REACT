import { React,useState } from 'react'
import Child from './Components/Child'

function App() {
  const [recievedData,setRecievedData] = useState('')
  return (
    <div>
      <p>Data is:{recievedData}</p>
      <Child props ={(data)=>{setRecievedData(data)}}/>
    </div>
  )
}

export default App
