import connectMongo from "@/libs/mongodb"
import Users from "@/models/users"
import { NextRequest, NextResponse } from "next/server"

const API_URI = process.env.USER_URI
export async function POST(request:Request){
    const {username, password} = await request.json()
    await connectMongo(API_URI)
    await Users.create({username,password})
    return NextResponse.json({message: "User Created"})
}

export async function GET(request:Request) {
    await connectMongo()
    const users = await Users.find()
    return NextResponse.json({users})
}

export async function DELETE(request:NextRequest) {
    const id =request.nextUrl.searchParams.get("id")
    await connectMongo(API_URI)
    await Users.findByIdAndDelete(id)
    return NextResponse.json({message:"User Deleted"})
}