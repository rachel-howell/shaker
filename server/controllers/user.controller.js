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
        const user = await User.findOne({email:req.body.userEmail})
        // console.log("email", req.body.userEmail)
        if(!user) {
            return res.status(400).json({error:"Invalid email or password."})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.userPassword, user.password)
            if(!isPasswordValid){
                return res.status(400).json({error:"Invalid email or password."})
            }else{
                const userToken = jwt.sign({_id:user._id},SECRET)
                return res.status(201).cookie('userToken',userToken,{httpOnly:true,expires:new Date(Date.now() + 900000)}).json({successMessage:"User logged in",user:user})
            }
        }catch(error){
            return res.status(400).json({error:"Invalid email or password."})
        }
    },
    logOutUser: (req,res) => {
        res.clearCookie("userToken")
        res.json({success:"User logged out"})
        return
    },
    showUsers: (req,res) => {
        User.find()
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },
    isUserLoggedIn: (req,res) => {
        const token = req.cookies.userToken;
        if(!token) {
            res.json("false");
        } else{
            res.json("true");
        }
    },
    updateUserFavorite: (req,res) => {
        User.findOneAndUpdate({_id: req._id}, {$push: {favorites: req.body}})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
    },
    getFavorites: (req,res) => {
        User.findById({id: req.body})
        .then(user => res.json(user.favorites))
        .catch(err => res.status(400).json(err))
    },
    getCollections: (req,res) => {
        User.findById({id: req.body})
        .then(user => res.json(user.collections))
        .catch(err => res.status(400).json(err))
    }
}
