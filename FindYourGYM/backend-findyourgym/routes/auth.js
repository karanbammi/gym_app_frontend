import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
const router = express.Router();

//Logging In and Comparing the password
router.post('/', async(request, response) => {
    const user = await User.findOne({ email: request.body.email});
    if(!user) return response.status(400).send("Invalid Email or Password!");


    const isValid = await bcrypt.compare(request.body.password, user.password);
    if(!isValid) return response.status(400).send("Invalid Email or Password!");

    return response.status(200).send(user);    
});

export default router;

