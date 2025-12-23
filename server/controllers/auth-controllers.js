 const Home = async (req,res)=>{
    try{
        res.status(200).send("Hello from server");
    } catch(error){
      console.error(error)
      return res.status(500).json({message:"Internal server error"})
    }
}

import { User } from "../models/user-model.js";

 const Register = async (req,res)=>{ 
    try{
       const {userName,email,password,phone} = req.body;

        const exist = await User.findOne({email:email});
        if(exist){
            return res.status(400).json({message:"User already exist"});
        } 
      const userCreated = await User.create({userName,email,password,phone})
       
       return res.status(201)
       .json({
        msg:"registration sucessfull",
        token:await userCreated.generateToken(),
        name:userCreated.userName,
        email:userCreated.email,
        userId:userCreated._id.toString()
      });   
    } catch(error){
      return res.status(500).json({message:"Internal server error"})
    } 
}
const Login = async (req,res)=>{ 
  try{
  const {email,password} = req.body
  const userExist = await User.findOne({email})

  if (!userExist){
    return res.status(400).json({message:"invalid id or password"})
  }
  const user = await userExist.comparePassword(password);
    if(user){
       res.status(200).json({
        msg:"login sucessfull",
        token:await userExist.generateToken(),
        userId:userExist._id.toString()
       })
    }
    else{
      return res.status(401).json({message:"invalid id or password"})
    }
  } catch(error){
    res.status(500).json({message:"Internal server error"})
  }
}
export const authController = {Home,Register,Login}
