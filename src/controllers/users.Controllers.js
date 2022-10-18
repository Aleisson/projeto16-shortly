import * as helper from "./controllers.Helper.js";
import * as repositories from "../repositories/users.Repository.js";

async function getUsersMe(req, res) {

    const user = res.locals.user;

    try {

        const response = await repositories.selectUrlsUserId(user.id);
        const responseSum = await repositories.selectUrlsSum(user.id);
        if (response.rowCount && responseSum.rowCount) {
            return helper.okResponse(res,

                {
                    id: user.id,
                    name: user.name,
                    visitCount: responseSum.rows.at(0).sum,
                    shortenedUrls: response.rows.map(elem => ({
                        id: elem.id,
                        shortUrl: elem.short_url,
                        url:elem.url,
                        visitCount:elem.visite_count
                    }))


                }

            )
        }
        return helper.badResquestResponse(res, { message: 'Erro servidor' });


    } catch (error) {
        return helper.serverError(res, error);
    }

}

export { getUsersMe };