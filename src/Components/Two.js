import React,{useContext} from 'react'
import { AppContext } from '../AppContext'

function Two(props) {
  const {data} = useContext(AppContext)
  return (
    <div>
      <h1>Layer Two {data}</h1>
    </div>
  )
}

export default Two
