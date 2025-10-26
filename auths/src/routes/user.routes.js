const express = require('express');
const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;



    const UserAlreadyExists = await userModel.findOne({
        username
    })
    if (UserAlreadyExists) {
        return res.status(400).json({
            messgae: "User already exists"
        })
    }

    const user = await userModel.create({
        username,
        password
    })


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)


    res.cookie("token", token, {
        expires: new Date(Date.now() + 86400000),
    })


    res.status(201).json({
        message: "User registered successfully",
        user: user
    })
})

router.get('/user', async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            meessage: "Unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findOne({ _id: decoded.id })

        return res.status(200).json({
            message: "User fetched successfully",
            user: user
        })
    } catch (err) {
        res.status(401).json({
            message: "Invalid Token, Unauthorized"
        })
    }






})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({
        username
    })

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPasswordValid = user.password === password;
    if(!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }



    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        expires: new Date(Date.now() + 86400000),
    })

    res.status(200).json({
        message: "Login Successful",
        user: user
    })


})

router.get('/logout',  (req,res)=>{
    res.clearCookie("token")
    res.status(200).json({
        message: "Logout Successful"
    })  

})

    module.exports = router;