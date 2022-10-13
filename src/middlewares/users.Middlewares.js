import { notImplemented } from "./middlewares.Helper.js";

async function userMeMiddleware(req, res, next) {


    return notImplemented(res);

    next();
}

export { userMeMiddleware }