import mongoose from "mongoose";
import { stringify } from "querystring";

const connectMongo = async (uri) =>{
    try{
        await mongoose.connect(stringify(uri))
    }catch(error){
        console.log(error)
    }
}

export default connectMongo