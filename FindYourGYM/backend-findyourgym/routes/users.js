import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
const router = express.Router();

router.get('/', async(request, response) => {
    //Fetch Users from DB and return them....
    const users = await User.find();
    response.status(200).send(users);
});


router.post('/', async(request, response) => {
    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(request.body.password, salt);

    const user = new User({ 
        username: request.body.username,
        email: request.body.email,
        password: hashed
    });

    //Store the user in DB
    const result = await user.save();
    //users.push(user);
    response.status(200).send(result);   
});

export default router;