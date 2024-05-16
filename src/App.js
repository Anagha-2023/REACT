import React from 'react'
// import { useState } from 'react'
import About from './Components/About';
import Contact from './Components/Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  // const [state,setState] = useState('');

  return (
    <div>
      <BrowserRouter>

      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Routes>
      <Route Component={About} path='/about'/>
      <Route Component={Contact} path='/contact'/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
