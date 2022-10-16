import * as helper from "./middlewares.Helper.js";
import * as repository from '../repositories/urls.Repository.js'
import { urlSchema } from "../schemas/urls.Schema.js";

async function urlsShorten(req, res, next) {


    const validUrl = urlSchema.validate(req.body);

    if (validUrl.error) {
        return helper.unauthorizedResponse(res)
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


async function urlsOpenShortUrl(req, res, next) {

    return notImplemented(res);

    next();
}




export { urlsShorten, urlsId, urlsOpenShortUrl }