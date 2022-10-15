import * as helper from "./controllers.Helper.js";
import * as repository from "../repositories/authorization.Repository.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

async function signUp(req, res) {

    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {

        const response = await repository.insertUsers(name, email, passwordHash);
        if(response.rowCount){
            return helper.createResponse(res, { message: 'Created' });
        }
        return helper.badResquestResponse(res, {message: 'Erro nos parametros'});
    } catch (error) {
        return helper.serverError(res, error);
    }

}

async function signIn(req, res) {


    return helper.notImplemented(res);

}

export { signUp, signIn }