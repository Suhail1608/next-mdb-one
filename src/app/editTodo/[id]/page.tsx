'use client'
import React, { useEffect, useState } from 'react'
import './styles.css'
import Router, { useRouter } from 'next/navigation'
import Button from '@/components/TodoCard/Button/Button'
import { EditTodoForm } from '@/components/EditTodoForm'

const page = async ({params}:{params:{id:string}}) => {
    const API_URL = `http://localhost:3000/api/todos/${params.id}`
    async function GetTodo() {
        try{
            const res = await fetch(API_URL,{cache:"no-store"})
            return res.json()
        }
        catch{
            throw new Error()
        }

    }
    const {todo} = await GetTodo()
    const {title, desc} = todo
  return (
    <EditTodoForm id={params.id} title={title} desc={desc}/>
  )
}

export default page