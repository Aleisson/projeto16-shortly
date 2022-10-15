import express from 'express';
import * as controllers from '../controllers/authorization.Controllers.js';
import * as middlewares from '../middlewares/authorization.Middlewares.js';

const router = express.Router();


router.post('/signup', middlewares.signUp, controllers.signUp);

router.post('/signin', middlewares.signIn, controllers.signIn);

export default router;