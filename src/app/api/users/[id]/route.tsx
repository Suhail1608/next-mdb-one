import connectMongo from "@/libs/mongodb";
import Users from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
const API_URI = process.env.USER_URI
export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {

    const {id} = params
    const {newUsername:username, newPassword:password} = await request.json()
    await connectMongo(API_URI)
    await Users.findByIdAndUpdate(id, {username,password})
    return NextResponse.json({message:"User Updated"})

}
export async function GET(request:NextRequest, {params}:{params:{id:string}}){
    const {id} = params
    await connectMongo(API_URI)
    const user = await Users.findOne({_id:id})
    return NextResponse.json({user})
}