export default (dependencies) => {
    const userRegisterController = async (req, res) => {
        const { use_case: { userRegisterUsecase } } = dependencies
        try {
            const userData = req.body
            if (!userData) {
                return res.status(400).json({ message: "User data is required." });
            }
            const { executeFunction } = await userRegisterUsecase(dependencies)
            const result = await executeFunction(userData)
            if (!result.success) {
                return res.status(400).json({ message: result.message || "error in sending verify mail " })
            }
            return res.status(201).json({ success: true, otp: result.otp, message: "successful, please verify your email" })
        } catch (error) {
            console.error("error in register user", error);
            return res.status(500).json({ message: error.message || "Internal server error" });
        }

    }
    return userRegisterController
}