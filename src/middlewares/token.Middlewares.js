import * as helper from "./middlewares.Helper.js";
import jwt from 'jsonwebtoken';

async function tokenAuthorization(req, res, next) {

    const token = helper.filterBearer(req);
   
    if (!token) {
        return helper.unauthorizedResponse(res);
    }

    try {
        const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);

        res.locals.userId = userId;
        next();

    } catch (error) {
        return helper.unauthorizedResponse(res);
    }

}

export { tokenAuthorization };