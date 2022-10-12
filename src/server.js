import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authorizationRoutes from './routes/authorization.Routes.js';
import urlsRoutes from './routes/urls.Routes.js';
import usersRoutes from './routes/users.Routes.js';
import rankingRoutes from './routes/ranking.Routes.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(json());

server.use(authorizationRoutes);
server.use(urlsRoutes);
server.use(usersRoutes);
server.use(rankingRoutes);


server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});
