import * as helper from "./middlewares.Helper.js";
import * as repository from '../repositories/users.Repository.js'

async function getUserMe(req, res, next) {

    const userId = res.locals.userId;
    try {

        const response = await repository.selectUsersId(userId);

        if (!response.rowCount) {
            return helper.notFoundReponse(res);
        }
       
        res.locals.user = response.rows.at(0);
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}

export { getUserMe }