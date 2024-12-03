import User from "../models/userModel.js"

export const signup=async(req,res)=>{
    try {
       const {fullName,username,password}=req.body 

       if(!fullName||!username||!password){
        return res.status(400).json({error:"all fields are required"})
       }

       const newUser=await User.create({
        fullName,
        username,
        password
       })

       res.status(201).json({
        message:"user created successfully",
        data:newUser
       })

    } catch (error) {
        console.log("Error in signup controller",error.message)
        res.status(500).json({error:`Internal server error`})
    }
}