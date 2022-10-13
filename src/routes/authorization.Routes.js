import express from 'express';
import { signUp, signIn } from '../controllers/authorization.Controllers.js';
import { signInMiddleware, signUpMiddleware } from '../middlewares/authorization.Middlewares.js';

const router = express.Router();


router.post('/signup', signUpMiddleware, signUp);

router.post('/signin', signInMiddleware, signIn);

export default router;