import React from 'react'
// import { useState } from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes ,useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/about')}>About Me</button>
        <button onClick={()=>navigate('/contact')}>Contact Me</button>
        <Routes>
        <Route element={<About/>} path = '/about'/>
        <Route element={<Contact/>} path = '/contact'/>
        </Routes>
        
    </div>
  )
}

export default App
