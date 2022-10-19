import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

//Model -> Like a Class
const User = mongoose.model('User', userSchema);

export default User;