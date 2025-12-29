import { Contact } from "../../models/contact-model.js";

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

export const deleteContactById = async (req, res, next) => {
    try {
        const contactId = req.params.id
        await Contact.deleteOne({_id: contactId})
        return res.status(200).json({message: "Contact deleted successfully"});
    } catch (error) {
        next(error);
    } 
}