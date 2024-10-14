export default (dependencies) => {
    const resendOtpController = async (req, res) => {
        const { use_case: { resendOtpUsecase } } = dependencies
        try {
            const { name, email } = req.body
            const { executeFunction } = await resendOtpUsecase(dependencies)
            const result = await executeFunction(name, email)
            if(!result){
                return res.status(400).json({message:"please generate otp"})
            }
            return res.status(201).json({success : true , otp : result , message:"success"})
        } catch (error) {
            console.error(error, "error in resend otp");
            return res.status(500).json({ message: "error in resend otp" })
        }
    }
    return resendOtpController
}