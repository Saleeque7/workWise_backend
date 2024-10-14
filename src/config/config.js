import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT : process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    BASE_URL:process.env.BASE_URL,
    EMAIL:process.env.EMAIL,
    PASSWORD:process.env.PASSWORD,
    JWT_SECRET:process.env.JWT_SECRET
}