import express from 'express'

const router = express.Router();


router.post('/urls/shorten', (req, res) => { res.send('<h1>urls/shorten</h1>') })

router.get('/urls/:id', (req, res) => { res.send('<h1>urls/:id</h1>') })

router.get('/urls/open/:shortUrl', (req, res) => { res.send('<h1>urls/open/:shortUrl</h1>') })

router.delete('/urls/:id', (req, res) => { res.send('<h1>urls/:id</h1>') })

export default router;
