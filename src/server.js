import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const server = express();

server.use(cors());
server.use(json());



server.listen(5000, () => { console.log("Server running on port 5000")});
