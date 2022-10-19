import mongoose from "mongoose";

export default function connect(){
    mongoose.connect('mongodb+srv://admin:admin1234@cluster0.lkt9yay.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Connected to MongoDB...'))
        .catch((error) => console.error('Could not connect to mongoDB', error));  
}