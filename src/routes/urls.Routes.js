import express from 'express'
import * as controllers from '../controllers/urls.Controllers.js';
import * as middlewares from '../middlewares/urls.Middlewares.js'

const router = express.Router();


router.post('/urls/shorten', middlewares.urlsShorten, controllers.postUrlsShorten)

router.get('/urls/:id', middlewares.urlsId, controllers.getUrlsId)

router.get('/urls/open/:shortUrl', middlewares.urlsOpenShortUrl, controllers.getUrlsOpenShortUrl)

router.delete('/urls/:id', middlewares.urlsId, controllers.deleteUrlsId)

export default router;
