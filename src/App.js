import React, { useState } from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes ,useNavigate} from 'react-router-dom';
import { AppContext } from './AppContext';

function App() {
  const navigate = useNavigate()
  const [state,setState] = useState(100)
  return (
    <div>
        <button onClick={()=>navigate('/about')}>About Me</button>
        <button onClick={()=>navigate('/contact')}>Contact Me</button>

        <AppContext.Provider value={{data:state}}>
          <Routes>
           <Route element={<About/>} path = '/about'/>
           <Route element = {<Contact/>} path='/contact'/>
          </Routes>
        </AppContext.Provider>
         
    </div>
  )
}

export default App
