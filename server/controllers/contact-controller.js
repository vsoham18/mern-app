import {Contact} from "../models/contact-model.js";
export const ContactController = async (req,res)=>{
    try{
       const {message,email,username} = req.body;
       const contactCreated = await Contact.create({message,email,username})
       console.log(contactCreated);
       return res.status(201).json({msg:"message sent sucessfully"})
    } catch(error){
        res.status(500).json({message:"Internal server error"})
    }
} 