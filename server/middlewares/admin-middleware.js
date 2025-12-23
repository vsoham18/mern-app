export const adminCheck = async (req,res,next)=>{
    try{
       if(!req.user.isadmin){
        return res.status(403).json({message:"Access denied. Admins only."});
       }
     next()
    }catch(err){
        next(err);
    }
}