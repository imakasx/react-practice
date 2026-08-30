import {createSlice , nenoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1, text:"hey im akash "}]
}

function sayHello (){
    console.log("hello  ")
}

export const todoSlice = createSlice({
    name : 'todo', 
    initialState, 
    reducers:{
        addTodo:
    }
})