import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
export function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button
            onclick={()=>dispatch(removeTodo(todo.id))}>
                X
            </button>
        </li>
    ))}
    </>
  );
}
