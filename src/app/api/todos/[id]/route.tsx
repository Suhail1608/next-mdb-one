import connectMongo from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";
const API_URI = process.env.MONGO_URI
export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {

    const {id} = params
    const {newTitle:title, newDesc:desc} = await request.json()
    await connectMongo(API_URI)
    await Todo.findByIdAndUpdate(id, {title,desc})
    return NextResponse.json({message:"Todo Updated"})

}
export async function GET(request:NextRequest, {params}:{params:{id:string}}){
    const {id} = params
    await connectMongo(API_URI)
    const todo = await Todo.findOne({_id:id})
    return NextResponse.json({todo})
}