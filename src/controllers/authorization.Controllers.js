import * as helper from "./controllers.Helper.js";
import * as repository from "../repositories/authorization.Repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function signUp(req, res) {

    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {

        const response = await repository.insertUsers(name, email, passwordHash);
        if (response.rowCount) {
            return helper.createResponse(res, { message: 'Created' });
        }
        return helper.badResquestResponse(res, { message: 'Erro nos parametros' });
    } catch (error) {
        return helper.serverError(res, error);
    }

}

async function signIn(req, res) {

    const { id } = res.locals.user;

    const token = jwt.sign(
        { userId: id },
        process.env.TOKEN_SECRET,
        { expiresIn: '6h' }
    );

    try {
       const sessionCheck = await repository.selectSessionId(id);
        if (sessionCheck.rowCount) {
            await repository.updateSession(id, token);
            return helper.updateResponse(res, { message: 'Update' });
        }


        const response = await repository.insertSession(id, token);
        if (response.rowCount) {
            return helper.createResponse(res, { message: 'Created' });
        }
        return helper.badResquestResponse(res, { message: 'Erro nos parametros' });
    } catch (error) {
        return helper.serverError(res, error);
    }

}

export { signUp, signIn }