import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

 const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isadmin:{
        type: Boolean,
        default: false
    }
 })
   
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")){
         next();
    }
    try{
       const saltRounds = await bcrypt.genSalt(10);
       this.password = await bcrypt.hash(this.password, saltRounds);
    }catch(error){
        next(error);
    }
})

  userSchema.methods.generateToken = async function (){
     try{
         return jwt.sign({
            id: this._id.toString(),
            email: this.email,
            isadmin: this.isadmin
         }, process.env.JWT_SECRET, 
         {
            expiresIn:"30d"
        })
     }catch(error){
        console.error(error)
     }
  }
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
 export const User = mongoose.model("User", userSchema); 