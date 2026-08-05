import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [char, setchar] = useState(false)
  const [num, setnum] = useState(false)
  const [pass, setpass] = useState("")

  const PasswordGen = useCallback(()=>{
    let Password = "";
    let str = "ABCDEFGHIZKLMNOPQSTRUVWXYZabxdefghizklmnopqrstuvwxyz";
    if(num)str += "0123456789";
    if(num)char += "[]+_!@#$%^&*{}~";
    
    for (let i = 1; i <= array.length; i++) {
      let word = Math.floor(Math.random() * str.length + 1)
      Password += str.charAt(word)
    }
    setpass(Password) 
    },[length, setchar, setpass, setnum])

  return (
  <>
  <h1 className='text-4xl text-center text-white '>Password Generator</h1>
  
  </>
  )
}

export default App
