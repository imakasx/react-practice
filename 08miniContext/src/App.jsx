import UserContextProvider from './Context/UserContextProvider'
import React from 'react'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with akash</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
