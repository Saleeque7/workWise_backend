export default (dependencies) => {
    const refreshTokenController = async(req,res) => {
        const {use_case : {refreshTokenUsecase}} = dependencies
        try {
            const token = req.cookies.refreshToken;
            const {executeFunction}  = await refreshTokenUsecase(dependencies)
            const result = await executeFunction(res,token)
        
            if(!result.success){
                return res.status(400).json({message:result.message || 'Forbidden'})
            }
            return res.status(200).json({accessToken: result.accessToken})
            
        } catch (error) {
            console.error(error,"error in refreshTokenController");
            return res.status(500).json({message:"error in cretae new token"})
        }
    }
    return refreshTokenController
}