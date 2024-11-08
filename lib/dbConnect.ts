import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error: any) {
        throw new Error(`Unable to connect to database: ${error.message}`);
        
    }
}

export default dbConnect