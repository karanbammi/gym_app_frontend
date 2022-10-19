import mongoose from "mongoose";

//Schema
const contactSchema = new mongoose.Schema({
    username: String,
    email: String,
    message: String,
});

//Model -> Like a Class
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;