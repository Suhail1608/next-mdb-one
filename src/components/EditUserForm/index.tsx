import React, { useState } from 'react'
import Button from '../UserCard/Button/Button'
import { useRouter } from 'next/navigation'

export const EditUserForm = ({id, username, password}:{id:string, username:string, password:string}) => {
    const API_URL = `http://localhost:3000/api/users/${id}`
  const router = useRouter()
 
  const [newUsername, setNewUsername] = useState(username)
  const [newPassword, setNewPassword] = useState(password)
    async function Update(){
    
        const res = await fetch(API_URL,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({newUsername,newPassword})
        })
        if(!res.ok){
            console.log("Failed to Update")
        }
        
        router.push("/")
        router.refresh()
    }
  return (
    <div className='main'>
        Edit
        <div className='edit-card'>
            <label>Title <input onChange={(e)=>{setNewUsername(e.target.value)}} value={newUsername}></input></label>
            <label>Desciption <input onChange={(e)=>{setNewPassword(e.target.value)}} value={newPassword}></input></label>
            <span>
                <button onClick={Update}>Update</button>
                <Button label='Cancel' buttonType='link' id=''/>
            </span>
        </div>
    </div>
  )
}
