import React from 'react'

function Child({data}) {
  return (
    <div>
      <h1>{data.name}:{data.age}</h1>
    </div>
  )
}

export default Child
