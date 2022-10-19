import express from 'express';
import connect from './connectToDB.js';
import users from './routes/users.js';
import contactus from './routes/contactus.js';
import auth from './routes/auth.js';
import cors from 'cors';
const app = express();

//Connecting to DB
connect();
app.use(express.json()); // To enable parsing of JSON objects in routes
app.use(cors());

//Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contactus', contactus);

app.get('/',(request,response) => {
    response.send("Home Page");
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
