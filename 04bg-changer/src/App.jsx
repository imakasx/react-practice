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
        <div className='fixed flex flex-wrap justify-center bg-white rounded-2xl px-2 py-1' >
          
        </div>
      </div>

    </div>
    </>
  )
}

export default App
