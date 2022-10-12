import express from 'express';


const router = express.Router();


router.post('/signup', (req, res) => { res.send('<h1>signup</h1>') });

router.post('/signin', (req, res) => { res.send('<h1>signin</h1>') });

export default router;