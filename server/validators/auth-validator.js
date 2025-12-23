import { z } from 'zod';
 
export const loginSchema = z.object({

   email: z
    .string({required_error:"Email is required"})
    .nonempty({message:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, { message: "Email should be at least 3 characters long" })
    .max(50, { message: "Email should not exceed 50 characters" }),
   password: z
    .string({required_error:"Password is required"}) 
    .min(6, { message: "Password should be at least 6 characters long" })
})

export const signupSchema = loginSchema.extend({
    userName: z
    .string({required_error:"Username is required"})
    .nonempty({message:"Username is required"})
    .trim()
    .min(3, { message: "Username should be at least 3 characters long" })
    .max(30, { message: "Username should not exceed 30 characters" }),
   
    phone: z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10, { message: "Phone number should be at least 10 characters long" })
    .max(10, { message: "Phone number should not exceed 10 characters" }),
    
})
