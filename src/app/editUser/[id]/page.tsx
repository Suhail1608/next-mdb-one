'use client'
import React, { useState } from 'react'
import './styles.css'
import Router, { useRouter } from 'next/navigation'
import Button from '@/components/UserCard/Button/Button'

const page = ({params}:{params:{id:string}}) => {
  const API_URL = `http://localhost:3000/api/users/${params.id}`
  const router = useRouter()

  const [newUsername, setNewUsername] = useState("")
  const [newPassword, setNewPassword] = useState("")
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
            <label>Username <input onChange={(e)=>{setNewUsername(e.target.value)}} value={newUsername}></input></label>
            <label>Password <input onChange={(e)=>{setNewPassword(e.target.value)}} value={newPassword}></input></label>
            <span>
                <button onClick={Update}>Update</button>
                <Button label='Cancel' buttonType='link' id=''/>
            </span>
        </div>
    </div>
  )
}

export default page