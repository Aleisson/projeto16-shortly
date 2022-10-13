import express from 'express'
import { postUrlsShorten, getUrlsId, getUrlsOpenShortUrl, deleteUrlsId } from '../controllers/urls.Controllers.js';
import { urlsIdMiddlewares, urlsShortenMiddlewares, urlsOpenShortUrlMiddleware } from '../middlewares/urls.Middlewares.js'

const router = express.Router();


router.post('/urls/shorten', urlsShortenMiddlewares, postUrlsShorten)

router.get('/urls/:id', urlsIdMiddlewares, getUrlsId)

router.get('/urls/open/:shortUrl', urlsOpenShortUrlMiddleware, getUrlsOpenShortUrl)

router.delete('/urls/:id', urlsIdMiddlewares, deleteUrlsId)

export default router;
