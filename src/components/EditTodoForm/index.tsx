import React, { useState } from 'react'
import Button from '../TodoCard/Button/Button'
import { useRouter } from 'next/navigation'

export const EditTodoForm = ({id, title, desc}:{id:string, title:string, desc:string}) => {
    const API_URL = `http://localhost:3000/api/todos/${id}`
  const router = useRouter()
 
  const [newTitle, setNewTitle] = useState(title)
  const [newDesc, setNewDesc] = useState(desc)
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
