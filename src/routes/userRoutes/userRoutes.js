import express from 'express'
import { taskController } from '../../controllers/index.js'
import { verifyToken } from '../../middlewares/authMiddleWare.js'

export default (dependencies) => {
    const {
        addTaskController,
        browseTaskController,
        joinTaskController,
        LeaveTaskController,
        editTaskStatusController,
        removeMemberController,
        editTaskController,
        browseDataController,
        notificationController
    } = taskController(dependencies)
    const router = express.Router()

    router.post('/addTask', verifyToken, addTaskController)
    router.get('/browseTask', verifyToken, browseTaskController)
    router.put('/joinTask', verifyToken, joinTaskController)
    router.put('/leaveTask', verifyToken, LeaveTaskController)
    router.put('/editTaskStatus', verifyToken, editTaskStatusController)
    router.put('/removeMember', verifyToken, removeMemberController)
    router.put('/editTask', verifyToken, editTaskController)
    router.get('/browseData', verifyToken, browseDataController)
    router.post('/notification', verifyToken, notificationController)
    return router
}