import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is react</h1>
      <h2>Counter value: 5</h2>

      <button>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
