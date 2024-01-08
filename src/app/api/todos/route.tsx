import connectMongo from "@/libs/mongodb"
import Todo from "@/models/todo"
import { NextRequest, NextResponse } from "next/server"

const API_URI = process.env.MONGO_URI
export async function POST(request:Request){
    const {title, desc} = await request.json()
    await connectMongo(API_URI)
    await Todo.create({title,desc})
    return NextResponse.json({message: "Todo Created"})
}

export async function GET(request:Request) {
    await connectMongo(API_URI)
    const todos = await Todo.find()
    return NextResponse.json({todos})
}

export async function DELETE(request:NextRequest) {
    const id =request.nextUrl.searchParams.get("id")
    await connectMongo(API_URI)
    await Todo.findByIdAndDelete(id)
    return NextResponse.json({message:"Todo Deleted"})
}