import mongoose, { Schema } from "mongoose";

const SchemaerviceSchema = new Schema({
    name: {
        type: String,   
        required: true
    },
    description: {
        type: String,
        required: true
    } , 
    price: {
        type: String,
        required: true  
    },
    provider: {
        type: String,
        required: true
    }
});

export const Service = mongoose.model("Service", SchemaerviceSchema);
