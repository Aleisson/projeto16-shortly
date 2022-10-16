import { STATUS_CODE } from "../Enums/statusCode.Enum.js";


function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);

}

function filterBearer(req) {

    return req.headers.authorization?.replace('Bearer ', '');

}

function serverError(res, error) {

    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);

}

function badResquestResponse(res, body) {

    return res.status(STATUS_CODE.BAD_REQUEST).send(body);

}

function unprocessableEntityResponse(res, body) {
    return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(body);
}

function conflictResponse(res) {

    return res.sendStatus(STATUS_CODE.CONFLICT)

}

function unauthorizedResponse(res) {
    return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
}

function notFoundReponse(res){
    return res.sendStatus(STATUS_CODE.NOT_FOUND);
}

export {
    notImplemented,
    filterBearer,
    serverError,
    badResquestResponse,
    unprocessableEntityResponse,
    conflictResponse,
    unauthorizedResponse,
    notFoundReponse
  
}

//const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    // console.log(decode.userId);
