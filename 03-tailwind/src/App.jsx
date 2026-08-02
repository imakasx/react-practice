import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../components/card'

function App() {

  let myObj ={
    name:"akash",
    age:21
  }
  let newArray = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-800 text-black p-4 rounded-3xl'>Tailwind CSS</h1>
    
    <Card username = "akash"/>
    <Card username = "Rahul" onclick="click me"/>
    </>
  )
}

export default App
