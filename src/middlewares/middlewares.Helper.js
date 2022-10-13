import { STATUS_CODE } from "../Enums/statusCode.Enum.js";


function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);

}

export { notImplemented }