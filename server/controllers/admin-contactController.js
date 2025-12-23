import { Contact } from "../models/contact-model.js";

export const adminContactController = async (req, res, next)=>{
    try{
        const contacts = await Contact.find({});
        if(!contacts || contacts.length ===0){
            return res.status(404).json({message: "No contacts found"});
        } 
        return res.status(200).json({contacts});
    }catch(error){
        next(error);
    }
}
