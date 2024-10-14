import userRoutes from "./userRoutes/userRoutes.js";
import authRoutes from "./authRoutes/authRoutes.js";
import express from 'express'

export const routes = (dependencies) => {
    const route = express.Router()
    
    route.use('/', authRoutes(dependencies))
    route.use('/user', userRoutes(dependencies))
    return route
} 