import { sendVerifyMail } from "../../helpers/sendVerifymail.js"
export const resendOtpUsecase =(dependencies)=>{

    const executeFunction = async(name ,email)=>{
        try {
            const message = 'Verification Email for WORKWISE Registration'

            const otp  = await sendVerifyMail(email , name , message)
            console.log(otp ,"resend");
            
            return otp 
        } catch (error) {
            throw error
        }
    }
    return { executeFunction}
}