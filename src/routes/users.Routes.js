import express from 'express';


const router = express.Router();

router.get('/users/me', (req, res) => {res.send('<h1>users/me</h1>')});


export default router;