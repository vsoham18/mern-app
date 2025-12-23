import mongoose from 'mongoose';
import { MONGODB_URI } from '../config/env.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MongoDB connected")
    }catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(0);
    }  
} 