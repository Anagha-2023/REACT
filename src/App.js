import { useState } from 'react'
import './App.css'

function App() {
  const [toDOs,setToDOs] = useState([]);
  const [toDo,setToDO] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a Good Day  🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDO(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setToDOs([...toDOs,{id:Date.now() ,text:toDo , status:false}])
          setToDO('');
        }
        } className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDOs.map((values)=>{
          return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(values);
              setToDOs(toDOs.filter(values2=>{
                if(values2.id === values.id){
                  values2.status = e.target.checked
                }
                return values2
              }))
            }} value={values.status} type="checkbox" name="" id="" />
            <p>{values.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setToDOs(toDOs.filter(toDo => toDo.id!==values.id))
            }} className="fas fa-times"></i>
          </div>
        </div>
        )
        }) 
        }
        <br></br>
        {/* {
          toDOs.map((obj)=>{
            if(obj.status){
              return(
              <h4 style={{textAlign:"left"}}>Done:{obj.text}</h4>
            )
            }
            return null
          })
        } */}
      </div>
    </div>
  )
}

export default App
