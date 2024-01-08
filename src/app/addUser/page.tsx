'use client'
import Button from '@/components/UserCard/Button/Button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import './styles.css'
const page = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
async function Post(){
    const API_URL = "http://localhost:3000/api/users"
    const res = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({username,password})
    })
    if(!res.ok){
        console.log("Failed to Post")
    }
    
    router.push("/")
    router.refresh()
}
  return (
    <div className='main'>
        Post
        <div className='post-card'>
            <label>Username <input onChange={(e)=>{setUsername(e.target.value)}} value={username}></input></label>
            <label>Password <input onChange={(e)=>{setPassword(e.target.value)}} value={password}></input></label>
            <span>
                <button onClick={Post}>Post</button>
                <Button label='Cancel' buttonType='link' id=''/>
            </span>
        </div>
    </div>
  )
}

export default page