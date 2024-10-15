import addTaskController from "./addTaskController.js";
import browseTaskController from "./browseTaskController.js";
import joinTaskController from "./joinTaskController.js";
import LeaveTaskController from "./LeaveTaskController.js";
import editTaskStatusController from "./editTaskStatusController.js";
import removeMemberController from "./removeMemberController.js";
import editTaskController from "./editTaskController.js";
import browseDataController from "./browseDataController.js";
import notificationController from "./notificationController.js";
import mytaskController from "./mytaskController.js";
import deleteTaskController from "./deleteTaskController.js";

export default (dependencies) =>{
    return {
        addTaskController:addTaskController(dependencies),
        browseTaskController:browseTaskController(dependencies),
        joinTaskController:joinTaskController(dependencies),
        LeaveTaskController:LeaveTaskController(dependencies),
        editTaskStatusController:editTaskStatusController(dependencies),
        removeMemberController:removeMemberController(dependencies),
        editTaskController:editTaskController(dependencies),
        browseDataController:browseDataController(dependencies),
        notificationController:notificationController(dependencies),
        mytaskController:mytaskController(dependencies),
        deleteTaskController:deleteTaskController(dependencies)
    }
}