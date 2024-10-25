export default (dependencies)=>{
    const { use_case : { editTaskUsecase }} = dependencies
    const editTaskController = async(req,res) =>{
        try {
            const { taskId } = req.params
            const { task } = req.body
            const TaskData = {
                taskId,
                task
            }
            const { executeFuction }  = await editTaskUsecase(dependencies)
            const result = await executeFuction(TaskData)

            if(!result.success){
                return res.status(400).json({ success :false ,message:"error in editing task"})
            }

            return res.status(200).json({success:true , message:result.message})
        } catch (error) {
            console.error(error,"error in editTask Controller");
            return res.status(500).json({message:"error in edit TaskController"})
        }
    }
    return editTaskController 
}