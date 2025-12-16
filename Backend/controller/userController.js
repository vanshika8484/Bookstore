import User from "../model/user_model.js";
import {toast} from "react-toastify";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
         res.status(400).json({message:"User already exists"});
         toast.error("User already exists")
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        })
        await createdUser.save()

         const userToReturn = {
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        };
        res.status(200).json({message:"User created successfully", user: userToReturn})
        toast.success("User created successfully")
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        toast.error("Internal Server Error")
    }
}

export const login=async(req,res)=>{
try{
const {email,password}=req.body;
const user=await User.findOne({email});
if (!user) {
            return res.status(400).json({ 
                success: false,
                message: "Invalid email or password" 
            });
        }
const isMatch=await bcryptjs.compare(password,user.password);
 if (!isMatch) {
            return res.status(400).json({ 
                success: false,
                message: "Invalid email or password" 
            });
        }
 res.status(200).json({
            success: true,
            message: "Login successful!",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
}
catch(error){
    console.log(error)
    toast.error("Internal Server Error")
}
}

