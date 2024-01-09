import { userConn } from "@/libs/mongodb";
import {Schema} from "mongoose";

const usersSchema = new Schema(
    {
        username: String,
        password: String
    },
    {
        timestamps:true
    }
)

const Users = userConn.models.Users || userConn.model("Users", usersSchema)

export default Users
