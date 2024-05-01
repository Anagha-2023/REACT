// import React from 'react'

// function Child({props}) {
//   const handleData = (event)=>{
//     const data = event.target.value
//     props(data)
//   }
//   return (
//     <div>
//       <input type='text' onChange={handleData} placeholder='Type here...'/>
//     </div>
//   )
// }

// export default Child

import React from 'react'

function Child({props}) {
  const handleData = ()=>{
    const data = "This data is from child to parent"
    props(data)
  }
  return (
    <div>
      <button onClick = {handleData}>Send data</button>
    </div>
  )
}

export default Child
