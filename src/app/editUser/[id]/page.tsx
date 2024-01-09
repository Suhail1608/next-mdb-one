'use client'
import './styles.css'
import { EditUserForm } from '@/components/EditUserForm'

const page = async ({params}:{params:{id:string}}) => {
  const API_URL = `http://localhost:3000/api/users/${params.id}`
  async function GetUser() {
    try{
        const res = await fetch(API_URL,{cache:"no-store"})
        return res.json()
    }
    catch{
        throw new Error()
    }

}
const {user} = await GetUser()
const {username, password} = user
  return (
   <EditUserForm id={params.id} username={username} password={password}/>
  )
}

export default page