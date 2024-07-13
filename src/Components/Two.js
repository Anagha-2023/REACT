import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

function Two() {
const {data} = useContext(AppContext)
  return (
    <div>
      <h1>Data is:{data}</h1>
    </div>
  )
}

export default Two
