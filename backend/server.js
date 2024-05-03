import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from './Routes/userRoutes.js';
import movieRoutes from './Routes/movieRoutes.js';
import actorRoutes from './Routes/actorRoutes.js';
import producerRoutes from './Routes/producerRoutes.js';
connectDB();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))


// api creation
app.use('/api/Users',userRoutes)
app.use('/api/Actors',actorRoutes)
app.use('/api/movies',movieRoutes)
app.use('/api/producers',producerRoutes)


app.listen(port,()=>{
    console.log('Server running on the port '+port)
});

// api creation
// app.get("/",(req,res)=>{
//     res.send("API is running...");
// })