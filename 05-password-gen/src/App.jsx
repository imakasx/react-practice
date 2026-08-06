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
  <div className='w-full max-w-md shadow-md mx-auto rounded-lg 
  px-4 py-3 my-20 text-orange-500 bg-gray-700 text-center'>
    <h1 className='text-center text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mt-4'>
      
      <input type="text" 
      value={PasswordGen} 
      placeholder='Password' 
      className='bg-white w-full outline-none '
      readOnly 
      />
      <button className='bg-blue-700 text-white px-4 py-1.5  shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}} />
        <label>
          lenght : {length}
        </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        id="numberInput"
        defaultChecked={num}
        onChange={()=>{
          setnum((prev)=> !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        id="charInput"
        defaultChecked={char}
        onChange={()=>{
          setnum((prev)=> !prev)
        }}
        />
        <label htmlFor="numberInput">Charecter</label>
      </div>
      
    </div>
  </div>
  </>
  )
}

export default App
