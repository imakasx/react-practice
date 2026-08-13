import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")
  const passRef = useRef(null)

  const PasswordGen = useCallback(()=> {
    let password = " ";
    let str = "ABCDEFGHIZKLMNOPQSTRUVWXYZabxdefghizklmnopqrstuvwxyz";
    if(num) str += "0123456789" 
    if(char) str += "!@#$%^&*-_+=[]{}~`"

    
    for (let i = 1; i <= length; i++) {
      let word = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(word)
    }
    setpass(password) 
    },[length, setchar, setpass, setnum])
    
    useEffect(()=>{ 
      PasswordGen()
    } , [length, char, num, PasswordGen])

    const copypass = useCallback(()=>{
      passRef.current?.select();
      passRef.current?.setSelectionRange(0, 99)
      window.navigator.clipboard.writeText(pass)
    }, [pass])


  return (
  <>
  <div className='w-full max-w-md shadow-md mx-auto rounded-lg 
  px-4 py-3 my-20 text-orange-500 bg-gray-700 text-center'>
    <h1 className='text-center text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mt-4'>
      
      <input type="text" 
      value={pass} 
      placeholder='Password' 
      className='bg-white w-full outline-none '
      readOnly 
      ref={passRef}
      />
      <button 
      className='bg-blue-700 text-white px-4 py-1.5  shrink-0'
      onClick={copypass}
      >Copy</button>
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
          setchar((prev)=> !prev)
        }}
        />
        <label htmlFor="charInput">Charecter</label>
      </div>
      
    </div>
  </div>
  </>
  )
}

export default App
