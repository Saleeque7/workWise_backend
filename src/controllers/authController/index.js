import loginController from "./loginController.js";
import userRegisterController from "./userRegisterController.js";
import resendOtpController from "./resendOtpController.js";
import verifyOtpController from "./verifyOtpController.js";
import refreshTokenController from "./refreshTokenController.js";

export default (dependencies) =>{
    return {
        loginController:loginController(dependencies),
        userRegisterController:userRegisterController(dependencies),
        resendOtpController:resendOtpController(dependencies),
        verifyOtpController:verifyOtpController(dependencies),
        refreshTokenController:refreshTokenController(dependencies)
    }
}