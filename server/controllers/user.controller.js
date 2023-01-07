const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {
    registerUser:async (req,res) => {
        try{
            const newUser = await User.create(req.body)
            const userToken = jwt.sign({_id:newUser._id},SECRET)
            res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 90000)}).json({successMessage:"User logged in",user:newUser})
        }catch(error){
            res.status(400).json(error)
        }
    },
    loginUser:async (req,res) => {
        const user = await User.findOne({email:req.body.email})
        if(!user) {
            res.status(400).json({error:"Invalid email or password."})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
            if(!isPasswordValid){
                res.status(400).json({error:"Invalid email or password."})
            }else{
                const userToken = jwt.sign({_id:user._id},SECRET)
                res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 90000)}).json({successMessage:"User logged in",user:user})
            }
        }catch(error){
            res.status(400).json({error:"Invalid email or password."})
        }
    },
    logOutUser: (req,res) => {
        res.clearCookie("userToken")
        res.json({success:"User logged out"})
    }

}