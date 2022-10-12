import express from 'express';


const router = express.Router();

router.get('/ranking', (req, res) => { res.send('<h1>/ranking</h1>') })


export default router;