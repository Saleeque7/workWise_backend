import { verifyOtp } from "../../helpers/otpVerify.js"
import { hashUserPassword } from "../../helpers/hashPassword.js"
import { generateToken } from "../../helpers/generateToken.js"
export const verifyotpUsecase  = (dependencies) => {
    const { repositories : { userRepository : { createUser }} } = dependencies

    const executeFunction = async(res ,userData , otp ,enteredotp)=>{
        try {
          const isVerified = await verifyOtp(otp,enteredotp)
          console.log(isVerified,"wttt");
          
        
          if(!isVerified){
            return {success:false , message:"otp is not matching"}
        }
        console.log("user",userData);
        
        const  hashedPassword = await hashUserPassword(userData.password)
          const user  =  await createUser(userData , hashedPassword)
          if(!user){
            throw new Error("user creation issue")
            
          }

          const {accessToken}  = await generateToken(res,user._id)
       
          return {
            success:true,
            user,
            accessToken
          }
        } catch (error) {
            throw error
        }
    }
    return { executeFunction}
}