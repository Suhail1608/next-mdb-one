import connectMongo from "@/libs/mongodb"
import Todo from "@/models/todo"
import { NextRequest, NextResponse } from "next/server"
export async function POST(request:Request){
    const {title, desc} = await request.json()
    await connectMongo()
    await Todo.create({title,desc})
    return NextResponse.json({message: "Todo Created"})
}

export async function GET(request:Request) {
    await connectMongo()
    const todos = await Todo.find()
    return NextResponse.json({todos})
}

export async function DELETE(request:NextRequest) {
    const id =request.nextUrl.searchParams.get("id")
    await connectMongo()
    await Todo.findByIdAndDelete(id)
    return NextResponse.json({message:"Todo Deleted"})
}