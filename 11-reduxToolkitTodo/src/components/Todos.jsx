import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'
export function Todos(){
    const todos =useSelector (state=>state.Todos)
    const dispatch = useDispatch()
    return(
        <div>T</div>
    )
}