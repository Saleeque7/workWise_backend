import jwt from 'jsonwebtoken'
import { generateToken } from '../../helpers/generateToken.js'
export const refreshTokenUsecase  = (dependencies) => {
    const executeFunction = async(res,token)=>{
        const { config : { JWT_SECRET } } = dependencies
        try {
            const decoded = jwt.verify(token,JWT_SECRET)
            const id = decoded.data.id;
            const { accessToken } = await generateToken(res,id)

            if(!accessToken){
                return {success : false , message :"error in token generating"}
            }

            return { success:true ,accessToken }
            
        } catch (error) {
            throw error
        }
    }
    return { executeFunction }
}