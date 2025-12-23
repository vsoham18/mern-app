import {Contact} from "../models/contact-model.js";
export const ContactController = async (req,res,next)=>{
    try{
       const {username,message,email} = req.body;
       const contactCreated = await Contact.create({username,message,email})
       console.log(contactCreated);
       return res.status(201).json({
        message:"message sent sucessfully",
       })

    } catch(error){
       next(error)
    }
} 

export const GetContactsController = async (req,res,next)=>{
    try{
       const contacts={
        username:req.user.userName, 
        email:req.user.email
       }
       return res.status(200).json(contacts)
    }catch(error){
        next(error)
    }
}