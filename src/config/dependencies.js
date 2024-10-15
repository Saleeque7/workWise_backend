import { repositories } from "../repositories/index.js";
import config from "./config.js";
import {
    // auth
    userRegisterUsecase,
    resendOtpUsecase,
    verifyotpUsecase,
    loginUsecase,
    refreshTokenUsecase,

    //task
    addtaskUsecase,
    browseTaskusecase,
    jointaskUsecase,
    leavetaskUsecase,
    editTaskStatususecase,
    removeMemberUsecase,
    editTaskUsecase,
    browseDataUsecase,
    notificationUsecase,
    mytaskUsecase,
    deleteTaskUsecase

} from "../usecases/index.js";

const use_case = {
    // auth
    userRegisterUsecase,
    resendOtpUsecase,
    verifyotpUsecase,
    loginUsecase,
    refreshTokenUsecase,

    //task
    addtaskUsecase,
    browseTaskusecase,
    jointaskUsecase,
    leavetaskUsecase,
    editTaskStatususecase,
    removeMemberUsecase,
    editTaskUsecase,
    browseDataUsecase,
    notificationUsecase,
    mytaskUsecase,
    deleteTaskUsecase
}

export default { use_case , repositories , config }