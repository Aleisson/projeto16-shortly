import * as helper from "./middlewares.Helper.js";
import * as repository from '../repositories/urls.Repository.js'
import { urlSchema } from "../schemas/urls.Schema.js";

async function urlsShorten(req, res, next) {


    const validUrl = urlSchema.validate(req.body);

    if (validUrl.error) {
        return helper.unauthorizedResponse(res)
    }

    const { url } = req.body;
    try {

        // const response = await repository.selectUrl(url)

        // if (response.rowCount) {
        //     return helper.conflictResponse(res);
        // }

    } catch (error) {
        return helper.serverError(res, error);
    }

    
    res.locals.url = req.body;
    next();
}

async function urlsId(req, res, next) {

    const { id } = req.params;

    try {
        const url = await repository.selectUrlsId(id);
        if (!url.rowCount) {
            return helper.notFoundReponse(res);
        }
        res.locals.url = url.rows.at(0);
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}

async function deleteUrlsId(req, res, next) {

    const { id } = req.params;
    const userId = res.locals.userId;
    
    try {
        const url = await repository.selectUrlsId(id);
        if (!url.rowCount) {
            return helper.notFoundReponse(res);
        }
        
        const urlUser = await repository.selectUrlIdUserId(id, userId);
        if (!urlUser.rowCount) {
            return helper.unauthorizedResponse(res)
        }
       
        res.locals.urlUser = urlUser.rows.at(0);
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}


async function urlsOpenShortUrl(req, res, next) {

    const { shortUrl } = req.params


    try {
        const url = await repository.selectUrlsShortUrl(shortUrl);

        if (!url.rowCount) {
            return helper.notFoundReponse(res);
        }
        res.locals.url = url.rows.at(0);
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }


}




export {
    urlsShorten,
    urlsId,
    urlsOpenShortUrl,
    deleteUrlsId
}