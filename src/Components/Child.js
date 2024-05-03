import React from 'react'

function Child({props}) {
  const datafromChild = () =>{
  const data = "This data is from child to parent";
  props(data)
  }
  return (
    <div>
      <button onClick={datafromChild}>Send Data</button>
    </div>
  )
}

export default Child
