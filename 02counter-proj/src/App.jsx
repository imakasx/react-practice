import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [count , setcounter] = useState(0)

// let count = 5
    const value = ()=>{
      if(count <= 19){
        count = count + 1;
        setcounter(count)
      }
    }
    const decrese = ()=>{
      if(count > 0){
        count = count - 1
        setcounter(count)
      }
    }

  return (

    <>
      <h1>This is react</h1>
      <h2>Counter value: {count}</h2>

      <button
      onClick={value}
      >Add value</button>
      <br />
      <button 
      onClick={decrese}
      >Remove value</button>
    </>
  )
}

export default App
