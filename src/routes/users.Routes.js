import express from 'express';
import { getUsersMe } from '../controllers/users.Controllers.js';

const router = express.Router();

router.get('/users/me', getUsersMe);


export default router;