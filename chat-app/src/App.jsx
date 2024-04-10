import React, { useContext } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Chatbox from './components/Chatbox'
import Home from './components/Home'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { AppContext } from './context/AuthContext'

const App = () => {
  const {currentuser} =useContext(AppContext)
  const Protectedlayer=({children})=>{
    if(!currentuser){
        return <Navigate to="/login"/>
    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/">
          <Route index element={<Protectedlayer>
            <Home/>
          </Protectedlayer>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App