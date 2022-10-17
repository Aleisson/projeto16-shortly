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

    const { id, short_url, url } = res.locals.url;

    return helper.okResponse(res, { id, shortUrl: short_url, url })
}

async function getUrlsOpenShortUrl(req, res) {

    const { id, url, visite_count } = res.locals.url;
    console.log(url);
    try {

        const response = await repository.updateVisite(id, visite_count);
        
        if (response.rowCount) {
            return helper.redirectResponse(res, url);
        }
        return helper.badResquestResponse(res, { message: 'Erro servidor' });

    } catch (error) {
        return helper.serverError(res, error);
    }

}


async function deleteUrlsId(req, res) {


    const { id } = res.locals.urlUser;

    try {
        const response = await repository.deleteUrls(id);

        if (response.rowCount) {
            return helper.noContentResponse(res);
        }
        return helper.badResquestResponse(res, { message: 'Erro servidor' });
    } catch (error) {
        return helper.serverError(res, error);
    }


}

export { postUrlsShorten, getUrlsId, getUrlsOpenShortUrl, deleteUrlsId }