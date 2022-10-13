import { notImplemented, unprocessableEntityReponse } from './middlewares.Helper.js';
import { singUpSchema } from '../schemas/authotizantion.Schemas.js';

async function signUpMiddleware(req, res, next) {


    const isValidBody = singUpSchema.validate(req.body, {abortEarly: false});

    if (isValidBody.error) {
        return unprocessableEntityReponse(res, isValidBody.error.details)
    }

    next();

}



async function signInMiddleware(req, res, next) {


    return notImplemented(res);

    next();

}

export { signUpMiddleware, signInMiddleware }