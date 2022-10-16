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
    console.log(process.env.TOKEN_SECRET);
    const token = jwt.sign(
        { userId: 1 },
        process.env.TOKEN_SECRET,
        { expiresIn: '6h' }
    );
    console.log(token);
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decode.userId);
    return res.send({ id: decode.userId });

}

export { signUp, signIn }