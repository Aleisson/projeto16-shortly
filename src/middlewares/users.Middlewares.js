import * as helper from "./middlewares.Helper.js";
import * as repository from '../repositories/urls.Repository.js'

async function getUserMe(req, res, next) {

    const userId = res.locals.userId;
    try {

        const response = await repository.selectUrl(url)

        if (response.rowCount) {
            return helper.notFoundReponse(res);
        }
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}

export { getUserMe }