import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRouter from './routes/dalle.routes.js';
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/dalle', dalleRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "Hi, Dall E"})
})

app.listen(8000, console.log("server is up and running"))