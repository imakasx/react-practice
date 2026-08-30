import {createSlice , nenoid} from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    todos:[{id:1, text:"hey im akash "}]
}

// function sayHello (){
//     console.log("hello  ")
// }

export const todoSlice = createSlice({
    name : 'todo', 
    initialState, 
    reducers:{
        addTodo: (state , action )=>{
            const todo = {
                id : nenoid(),
                text : action.payload   
            }, 
            state.todos.push(todo)
        },
        removeTodo: (state, action )=>{
            state.todos = state. todos.filter((todo)=>todo.
        id !== action.payload   )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions 

export default todoSlice.reducer