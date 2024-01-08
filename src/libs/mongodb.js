import mongoose from "mongoose";

const connectMongo = async (uri) => {
    try {
        await mongoose.connect(uri);
        // Optionally, you can listen for other events like 'reconnected', 'close', etc.

    } catch (error) {
        console.error('Error creating MongoDB connection:', error);
    }
}
export default connectMongo;
