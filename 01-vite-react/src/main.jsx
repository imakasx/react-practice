import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
    return(
        <div>
            <h1>react or me </h1>
        </div>
    )
}
// const reactElement ={
//     type: "a",
//     props :{
//         href : "https://google.com",
//         target: '_blank'
//     },
//     children: "click the link" 

// }

// const element = (
//     <a href="https://google.com" target='_blink'>vist the link</a>
// )

const element = React.createElement(
    'a',
    {href:'https://google.com', target:'_blink'},
    'vist link'
)

createRoot(document.getElementById('root')).render(
  
    element

)
