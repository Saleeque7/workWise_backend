import { sendVerifyMail } from "../../helpers/sendVerifymail.js"
export const userRegisterUsecase = (dependencies) => {
    const { repositories : { userRepository : {findUserByEmail}} } = dependencies
    const executeFunction = async(data)=>{   
        const { name ,email , phone ,password } = data   
        try {
            const message = 'Verification Email for WORKWISE Registration'
            const existEmail = await findUserByEmail(email)
            if (existEmail) {
                return { success: false , message : "email already in use"}
            }
            const otp  = await sendVerifyMail(email , name , message)
            console.log(otp ,"daaddasddssa");
            
            return { success:true , otp}
        } catch (error) {
            throw error; 
        }
    }
    return { executeFunction }
}