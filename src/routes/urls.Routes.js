import express from 'express'
import { postUrlsShorten, getUrlsId, getUrlsOpenShortUrl, deleteUrlsId } from '../controllers/urls.Controllers.js';

const router = express.Router();


router.post('/urls/shorten', postUrlsShorten)

router.get('/urls/:id', getUrlsId)

router.get('/urls/open/:shortUrl', getUrlsOpenShortUrl)

router.delete('/urls/:id', deleteUrlsId)

export default router;
