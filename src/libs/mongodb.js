import mongoose from "mongoose";

const connectMongo = async (uri) => {
    const db = mongoose.createConnection(uri)
    return db
    try {
        await mongoose.connect(uri);
        // Optionally, you can listen for other events like 'reconnected', 'close', etc.

    } catch (error) {
        console.error('Error creating MongoDB connection:', error);
    }
}

export const todoConn = await connectMongo(process.env.MONGO_URI);
export const userConn = await connectMongo(process.env.USER_URI);
export default connectMongo;

