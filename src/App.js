import React, { useState } from 'react'

function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const countries = ["India","Nepal","Butan","China","Palistan","Afganistan"];
  const handleSearch=(event)=>{
    setSearchTerm(event.target.value)
  }

  const Term = countries.filter((country)=>{
    return(
      country.toLowerCase().includes(searchTerm.toLowerCase())
    )  
  })
  return (
    <div>
      <input type='text' value={searchTerm} onChange={handleSearch}  placeholder='search here...'></input>
      <ul>
        {Term.map((country,index)=>{
          return(
            <div>
              <li key={index}><h1>{country}</h1></li>
            </div>
            
          )
        })}
      </ul>
    </div>
  )
}

export default App
