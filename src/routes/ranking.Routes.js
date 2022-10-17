import express from 'express';
import * as controllers from '../controllers/ranking.Controllers.js';


const router = express.Router();

router.get('/ranking', controllers.getRanking);


export default router;