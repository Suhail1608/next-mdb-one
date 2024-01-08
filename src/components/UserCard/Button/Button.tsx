'use client'
import React, { FC } from 'react'
import './styles.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Button = ({label, buttonType,id}:{label:string, buttonType:string,id:string}) => {
  const router = useRouter()
  async function Delete(){
    const API_URL = `http://localhost:3000/api/users/?id=${id}`
    const confirmed = confirm("Are you sure?")
    if(confirmed){
      const res = await fetch(API_URL,{
        method:"DELETE",
    })
    if(!res.ok){
        console.log("Failed to Post")
    }
    
    router.push("/")
    router.refresh()
    }else{
      return
    }
  }
    
  if(buttonType==="edit"){
    return (
        <Link className='link' href={`/editUser/${id}`}>
            {label}
        </Link>
    )
  }else if(buttonType==="link"){
    return (
        <Link className='link' href={`/`}>
            {label}
        </Link>
    )
  } else if(buttonType==="post"){
    return (
      <Link className='link' href={`/addUser`}>
          {label}
      </Link>
  )
  }else if(buttonType==='pop'){
    return (
      <button onClick={Delete}>
          {label}
      </button>
  )
  }
  else{
    return (
        <button>
            {label}
        </button>
    )

  }
}

export default Button