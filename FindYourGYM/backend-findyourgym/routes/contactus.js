import express from "express";
import Contact from "../models/ContactUs.js";
const router = express.Router();

router.post('/', async(request, response) => {
    const contact = new Contact({
        username: request.body.username,
        email: request.body.email,
        message: request.body.message
    });

    const result = await contact.save();
    response.status(200).send(result);
});

export default router;