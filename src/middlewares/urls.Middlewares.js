import * as helper from "./middlewares.Helper.js";
import { urlSchema } from "../schemas/urls.Schema.js";

async function urlsShorten(req, res, next) {

    
    const validUrl = urlSchema.validate(req.body);
    
    if (validUrl.error) {
        return helper.unauthorizedResponse(res)
    }

    
  
    next();
}

async function urlsId(req, res, next) {

    return notImplemented(res);

    next();
}


async function urlsOpenShortUrl(req, res, next) {

    return notImplemented(res);

    next();
}




export { urlsShorten, urlsId, urlsOpenShortUrl }