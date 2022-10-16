import { notImplemented } from './controllers.Helper.js'


async function postUrlsShorten(req, res) {

    const userId = res.locals.userId;
    console.log(userId);

    return notImplemented(res);


}

async function getUrlsId(req, res) {

    return notImplemented(res);

}

async function getUrlsOpenShortUrl(req, res) {

    return notImplemented(res);

}


async function deleteUrlsId(req, res) {

    return notImplemented(res);

}

export { postUrlsShorten, getUrlsId, getUrlsOpenShortUrl, deleteUrlsId }