import { todoConn } from "@/libs/mongodb";
import {Schema} from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        desc: String
    },
    {
        timestamps:true
    }
)

const Todo = todoConn.models.Todo || todoConn.model("Todo", todoSchema)

export default Todo
