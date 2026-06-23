import React from 'react'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App