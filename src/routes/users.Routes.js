import express from 'express';
import * as controllers from '../controllers/users.Controllers.js';
import * as middlewares from '../middlewares/users.Middlewares.js';
import { tokenAuthorization } from '../middlewares/token.Middlewares.js'
const router = express.Router();

router.get('/users/me', tokenAuthorization, middlewares.getUserMe, controllers.getUsersMe);


export default router;