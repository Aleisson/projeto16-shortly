import * as helper from './controllers.Helper.js'
import * as repository from '../repositories/urls.Repository.js'
import { nanoid } from 'nanoid';

async function postUrlsShorten(req, res) {

    const userId = res.locals.userId;
    const { url } = res.locals.url;
    const shortUrl = nanoid(8);
    //console.log(url);
    try {

        const response = await repository.insertUrls(userId, url, shortUrl);
        if (response.rowCount) {
            return helper.createResponse(res, { shortUrl });
        }
        return helper.badResquestResponse(res, { message: 'Erro servidor' });

    } catch (error) {
        return helper.serverError(res, error);
    }




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