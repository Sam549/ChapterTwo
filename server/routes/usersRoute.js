const router = require('express').Router();
const { response } = require('express');
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// New User Registration
router.post('/register', async (req, res) => {
    try {
        // Check if user already exsists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            throw new Error("User already exsists");
        }
        //  Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // save user
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message:"user created successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        })
    }
});

// User Login
router.post("/login", async (req, res) => {
    try {
        // check if user exsists
        const user = await User.findOne({email: req.body.email});
        if(!user){
            throw new Error ("User not found");
        }

        // compare password
        const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
        );
        if (!validPassword){
            throw new Error ("Invalid Password")
        }
        // Create and assign token
        const token = jwt.sign({userId: user._id}, process.env.jwt_secret);
        res.send({
            success: true,
            message: "user logged in successfully",
            data: token,
        });
    } catch (error) {
        response.send({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
