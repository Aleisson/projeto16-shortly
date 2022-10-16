import * as helper from './middlewares.Helper.js';
import * as repository from '../repositories/authorization.Repository.js'
import { singUpSchema, signInSchema } from '../schemas/authotizantion.Schemas.js';
import bcrypt from 'bcrypt';



async function signUp(req, res, next) {


    const isValidBody = singUpSchema.validate(req.body, { abortEarly: false });

    if (isValidBody.error) {
        return helper.unprocessableEntityResponse(res, isValidBody
            .error
            .details
            .map(elem => elem.message));
    }

    const { email } = req.body;
    try {

        const checkEmail = await repository.selectUsers(email);


        if (checkEmail.rowCount) {
            return helper.conflictResponse(res);
        }



        res.locals.user = req.body;
        next();

    } catch (error) {
        return helper.serverError(res, error);
    }

}



async function signIn(req, res, next) {


    const isValidBody = signInSchema.validate(req.body, { abortEarly: false });

    if (isValidBody.error) {
        return helper.unprocessableEntityResponse(res, isValidBody
            .error
            .details
            .map(elem => elem.message));
    };


    const { email, password } = req.body;

    try {

        const user = await repository.selectUsers(email);

        if (!user.rowCount) {
            return helper.unauthorizedResponse(res);
        }

        const { hash_password } = user.rows.at(0);

        const passwordValid = bcrypt.compareSync(password, hash_password);

        if (!passwordValid) {
            return helper.unauthorizedResponse(res);
        }


        res.locals.user = user.rows.at(0);
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }



}

export { signUp, signIn }