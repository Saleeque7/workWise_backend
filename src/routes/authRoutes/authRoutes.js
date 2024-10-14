import express from 'express'
import { authController } from '../../controllers/index.js'
export default (dependencies) => {
    const {
        loginController,
        userRegisterController,
        resendOtpController,
        verifyOtpController,
        refreshTokenController
    } = authController(dependencies)
    const router = express.Router()
    router.post('/login', loginController)
    router.post('/signup', userRegisterController)
    router.post('/resend', resendOtpController)
    router.post('/verify', verifyOtpController)
    router.post('/refresh',refreshTokenController)
    return router
}