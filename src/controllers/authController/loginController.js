export default (dependencies) => {
    const loginController = async (req, res) => {
        const {use_case :{ loginUsecase } } = dependencies
        try {
            const userData =req.body
            const { executeFunction } = await loginUsecase(dependencies)
            const result = await executeFunction(res , userData)

            
            
            if (!result.success) {
                return res.status(400).json({ success: false, message: result.message || "Login error" });
              }
        
              return res.status(200).json({
                success: true,
                user: result.user,
                accessToken: result.accessToken,
                message: "Login successful"
              });
            
        } catch (error) {
            console.error("error in  while log in customer", error);
            return res.status(500).json({ message: "error in login", error })

        }
    }
    return loginController
}