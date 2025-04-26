// src/App.js
import React from'react'
import { Routes,Route } from 'react-router-dom'
import  Account from './components/CreateAccount/CreateAccount'
import './App.css'
import Login from './component/Loginaccount/Loginaccount'
import Signup from './component/CreateProfile/CreateProfile'
import Profile from './component/UserProfile/UserProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Account/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/setting" element={<Profile />} /> 
        </Routes>
    </>
  )
}

export default App