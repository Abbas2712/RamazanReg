import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homepage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path='/homepage' element={<HomePage/>}/>
      {/* <Route path='/edit_venue'/> */}
      
    </Routes>
  )
}

export default App
