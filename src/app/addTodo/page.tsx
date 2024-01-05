'use client'
import Button from '@/components/TodoCard/Button/Button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import './styles.css'
const page = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
async function Post(){
    const API_URL = "http://localhost:3000/api/todos"
    const res = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({title,desc})
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
            <label>Title <input onChange={(e)=>{setTitle(e.target.value)}} value={title}></input></label>
            <label>Desciption <input onChange={(e)=>{setDesc(e.target.value)}} value={desc}></input></label>
            <span>
                <button onClick={Post}>Post</button>
                <Button label='Cancel' buttonType='link' id=''/>
            </span>
        </div>
    </div>
  )
}

export default page