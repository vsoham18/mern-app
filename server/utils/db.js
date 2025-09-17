import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';
const URI = process.env.MONGODB_URI
console.log("MONGODB_URI is:", URI); 

export const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("MongoDB connected")
    }catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(0);
    }  
} 