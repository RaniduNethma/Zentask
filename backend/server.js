import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';

const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database Connection
connectDB();

//Routes
app.get('/', (req, res) => {
    res.send('Api Working');
})

app.listen(port, () => {
    console.log('Server Started on http://localhost:${port}');
})