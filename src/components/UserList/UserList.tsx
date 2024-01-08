import { todo } from 'node:test'
import React from 'react'
import UserCard from '../UserCard/UserCard'

const GetUsers = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/users", {cache:"no-store"})
        if(!res.ok){
            throw new Error("Error")
        }
        return res.json()
    }
    catch(error){

    }
}
const UserList = async () => {
   const {users} = await GetUsers()
  return (
    <div>
        <ul>
            {users.map((user:{_id:string, username:string, password:string})=>{
                // return <li key={todo.title}>{todo.title}</li>
                return <UserCard key={user._id} username = {user.username} password = {user.password} id={user._id}/>
            })}
        </ul>
    </div>
  )
}

export default UserList