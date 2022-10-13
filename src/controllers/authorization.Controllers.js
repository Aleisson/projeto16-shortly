import { serverError, createResponse } from "./controllers.Helper.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";
import connection from "../database/database.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

async function signUp(req, res) {

    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {

        connection
            .query(`INSERT INTO ${TABLES_NAMES.USERS} (name, email, hash_password)
                VALUES($1, $2, $3)`, [name, email, passwordHash]);

        return createResponse(res, { message: 'Created' });
    } catch (error) {
        return serverError(res, error);
    }

}

async function signIn(req, res) {


    return notImplemented(res);

}

export { signUp, signIn }