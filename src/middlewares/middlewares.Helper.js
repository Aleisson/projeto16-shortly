import { STATUS_CODE } from "../Enums/statusCode.Enum.js";


function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);

}

function filterBearer(req) {

    return req.headers.authorization?.replace('Bearer ', '');

}

function badResquestResponse(res, body) {

    return res.status(STATUS_CODE.BAD_REQUEST).send(body);

}

function unprocessableEntityReponse(res, body){

    return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(body);
}

export { notImplemented, filterBearer, badResquestResponse}