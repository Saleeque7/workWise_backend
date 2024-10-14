export default (dependencies) => {
    const { use_case : {verifyotpUsecase }} = dependencies
    const verifyOtpController = async(req,res) => {
        try {
            const {userData , otp ,enteredotp}  = req.body
            
            const { executeFunction } = await verifyotpUsecase(dependencies)
            const result  = await executeFunction(res ,userData , otp ,enteredotp)
            if(!result.success){
                return res.status(400).json({message:result.message})
            }
            return res.status(201).json({success:true ,message : "otp verification successful!", user:result.user , accessToken:result.accessToken})
        } catch (error) {
            console.error(error,"error in verify otp");
            return res.status(500).json({message : "error in verifying otp"})
        }
    }
    return verifyOtpController
}