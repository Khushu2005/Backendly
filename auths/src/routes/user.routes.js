const express = require('express');
const userModel = require('../models/user.models');

const router = express.Router();


router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.create({ username, password });
    res.status(201).json({
        message: "User Registered Successfully",
        user
    })

})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({
        username:username
    });
    if (!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const ispasswordMatch = password === user.password;

    if (!ispasswordMatch) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }
    res.status(200).json({
        message: "Login Successful",
        user
    })

})

module.exports = router