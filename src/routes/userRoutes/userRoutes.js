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
        notificationController,
        mytaskController,
        deleteTaskController
    } = taskController(dependencies)
    const router = express.Router()

    router.post('/task', verifyToken, addTaskController)
    router.get('/task', verifyToken, browseTaskController)
    router.put('/task/join/:id', verifyToken, joinTaskController)
    router.put('/task/leave/:id', verifyToken, LeaveTaskController)
    router.put('/task/editStatus/:id', verifyToken, editTaskStatusController)
    router.put('/task/remove/:taskId/:memberId', verifyToken, removeMemberController)
    router.put('/task/edit/:taskId', verifyToken, editTaskController)
    router.get('/browseData', verifyToken, browseDataController)
    router.post('/notification', verifyToken, notificationController)
    router.get('/task/my_task', verifyToken, mytaskController)
    router.delete('/task', verifyToken, deleteTaskController);

    return router
}