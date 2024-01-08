import mongoose from "mongoose";

const connectMongo = async (uri) => {
    const db = mongoose.createConnection(uri)
    return db
    
}

export const todoConn = await connectMongo(process.env.MONGO_URI);
export const userConn = await connectMongo(process.env.USER_URI);
export default connectMongo;

