import express from 'express';
import * as controllers from '../controllers/ranking.Controllers.js';
import * as middlewares from '../middlewares/ranking.Middlewares.js'

const router = express.Router();

router.get('/ranking', middlewares.getRanking, controllers.getRanking);


export default router;