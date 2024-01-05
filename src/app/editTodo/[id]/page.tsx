'use client'
import React, { useState } from 'react'
import './styles.css'
import Router, { useRouter } from 'next/navigation'
import Button from '@/components/TodoCard/Button/Button'

const page = ({params}:{params:{id:string}}) => {
  const API_URL = `http://localhost:3000/api/todos/${params.id}`
  const router = useRouter()

  const [newTitle, setNewTitle] = useState("")
  const [newDesc, setNewDesc] = useState("")
  async function Update(){
    
    const res = await fetch(API_URL,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({newTitle,newDesc})
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
            <label>Title <input onChange={(e)=>{setNewTitle(e.target.value)}} value={newTitle}></input></label>
            <label>Desciption <input onChange={(e)=>{setNewDesc(e.target.value)}} value={newDesc}></input></label>
            <span>
                <button onClick={Update}>Update</button>
                <Button label='Cancel' buttonType='link' id=''/>
            </span>
        </div>
    </div>
  )
}

export default page