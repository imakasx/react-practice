import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color , setColor] = useState("black")
  return (
    <>
    <div className='w-full h-screen duration-150' 
    style={{background : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center bg-white rounded-3xl px-2 py-1 gap-2' >
          <button onClick={()=>{setColor("Red")}} className='px-2 py-1 rounded-full outline-none' style={{background : "red"}}>Red</button>
          <button onClick={()=>{setColor("Green")}} className='px-2 py-1 rounded-full outline-none' style={{background : "green"}}>Green</button>
          <button onClick={()=>{setColor("Pink")}} className='px-2 py-1 rounded-full outline-none' style={{background : "pink"}}>Pink</button>
          <button onClick={()=>{setColor("Orange")}} className='px-2 py-1 rounded-full outline-none' style={{background : "orange"}}>Orange</button>
          <button onClick={()=>{setColor("Olive")}} className='px-2 py-1 rounded-full outline-none' style={{background : "Olive"}}>Olive</button>
          <button onClick={()=>{setColor("Blue")}} className='px-2 py-1 rounded-full outline-none' style={{background : "Blue"}}>Blue</button>
          
        </div>
      </div>

    </div>
    </>
  )
}

export default App
