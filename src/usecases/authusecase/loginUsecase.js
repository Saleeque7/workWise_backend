import { comparePassword } from "../../helpers/hashPassword.js";
import { generateToken } from "../../helpers/generateToken.js";

export const loginUsecase = (dependencies) => {
    const executeFunction = async (res,data) => {
        const { repositories: { userRepository: { findUserByEmail } } } = dependencies
        try {
            const user = await findUserByEmail(data.email)
            if (!user) {
                return { success: false, message: "user does not exist" }
            }
            console.log(data, "mu");

            const isMatch = await comparePassword(data.Password, user.password)

            if (!isMatch) {
                return { success: false, message: "password does not match" }
            }

            const { accessToken } = await generateToken(res, user._id)


            return {
                success: true,
                user,
                accessToken
            }


        } catch (error) {
            throw error;
        }
    }
    return { executeFunction }
}