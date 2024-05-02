import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import movieRoutes from './Routes/movieRoutes.js';
import actorRoutes from './Routes/actorRoutes.js';
import producerRoutes from './Routes/producerRoutes.js';

const port = 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// api creation
app.use('api/movies',movieRoutes)
app.use('api/actors',actorRoutes)
app.use('api/producers',producerRoutes)


app.listen(port,()=>{
    console.log('Server running on the port '+port)
});

// api creation
app.get("/",(req,res)=>{
    res.send("API is running...");
})