import express from 'express';
import { getUsersMe } from '../controllers/users.Controllers.js';
import { userMeMiddleware } from '../middlewares/users.Middlewares.js'
const router = express.Router();

router.get('/users/me', userMeMiddleware, getUsersMe);


export default router;