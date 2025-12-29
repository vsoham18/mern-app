import { User } from "../../models/user-model.js";

export const getAllUsers = async (req,res,next)=>{
    try{
       const users = await User.find({}, {password: 0})
         if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
         }
         return res.status(200).json({users});
    }catch(error){
        next(error);
    }
}

export const deleteUserController = async (req,res,next) =>{
    try{
       const id = req.params.Id;
       await User.deleteOne({_id: id});
       return res.status(200).json({message: "User deleted successfully"});
    }catch(err){
         next(err);
    }
}

export const editUserController = async (req, res, next) => {
    try{
        const id = req.params.Id;
        const { userName, email, phone } = req.body;
        await User.findByIdAndUpdate(id, { userName, email, phone });
        return res.status(200).json({ message: "User updated successfully" });
    }catch(error){
        next(error);
    }
}

export const getUserByIdController = async (req, res, next) => {
    try{
        const id = req.params.Id;
        const user = await User.findById(id, {password: 0});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user});
    }catch(error){
        next(error);
    }
}