import connection from '../database/database.js';
import { notImplemented, unprocessableEntityResponse, conflictResponse, serverError } from './middlewares.Helper.js';
import { singUpSchema } from '../schemas/authotizantion.Schemas.js';
import { TABLES_NAMES } from '../Enums/tablesNames.Enum.js';


async function signUpMiddleware(req, res, next) {


    const isValidBody = singUpSchema.validate(req.body, { abortEarly: false });

    if (isValidBody.error) {
        return unprocessableEntityResponse(res, isValidBody
            .error
            .details
            .map(elem => elem.message));
    }

    const { email } = req.body;
    try {
        console.log(email);
        const checkEmail = await connection
            .query(`SELECT * FROM ${TABLES_NAMES.USERS} WHERE email = $1 ;`, [email]);
        console.log(checkEmail.rowCount);
        if (checkEmail.rowCount) {
            return conflictResponse(res);
        }

    } catch (error) {
        return serverError(res, error);
    }


    next();

}



async function signInMiddleware(req, res, next) {


    return notImplemented(res);

    next();

}

export { signUpMiddleware, signInMiddleware }