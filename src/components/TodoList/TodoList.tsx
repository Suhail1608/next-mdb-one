import { todo } from 'node:test'
import React from 'react'
import TodoCard from '../TodoCard/TodoCard'

const GetTodos = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/todos", {cache:"no-store"})
        if(!res.ok){
            throw new Error("Error")
        }
        return res.json()
    }
    catch(error){

    }
}
const TodoList = async () => {
   const {todos} = await GetTodos()
  return (
    <div>
        <ul>
            {todos.map((todo:{_id:string, title:string, desc:string})=>{
                // return <li key={todo.title}>{todo.title}</li>
                return <TodoCard key={todo._id} title = {todo.title} desc = {todo.desc} id={todo._id}/>
            })}
        </ul>
    </div>
  )
}

export default TodoList