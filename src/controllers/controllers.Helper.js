import { STATUS_CODE } from "../Enums/statusCode.Enum.js";

function serverError(res, error) {

    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);

}

function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);

}

function okResponse(res, body) {

    return res.send(body);

}

function badResquestResponse(res, body) {

    return res.status(STATUS_CODE.BAD_REQUEST).send(body);

}

function createResponse(res, body) {

    return res.status(STATUS_CODE.CREATED).send(body);

}

function updateResponse(res, body) {

    return res.status(STATUS_CODE.OK).send(body);

}


function redirectResponse(res, url) {

    return res.redirect(url);

}

function noContentResponse(res){
    return res.sendStatus(STATUS_CODE.NOT_CONTENT);
}

export {
    serverError,
    okResponse,
    badResquestResponse,
    createResponse,
    notImplemented,
    updateResponse,
    redirectResponse,
    noContentResponse
}

// const token = req.headers.authorization?.replace('Bearer ', '')