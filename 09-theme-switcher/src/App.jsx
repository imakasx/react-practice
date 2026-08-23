import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvide } from "./context/Theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Cards";

function App() {
  const [themeMode , setThemeMode] = useState("light")

  const darkTheme =()=>{
    setThemeMode("dark")
  }
  const lightTheme =()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    const ui = document.querySelector("html").classList
    ui.remove("light","dark")
    ui.add(themeMode)
 
  },[themeMode])


  return (
    <ThemeProvide value={{themeMode , darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>

          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvide>
  );
}

export default App;
