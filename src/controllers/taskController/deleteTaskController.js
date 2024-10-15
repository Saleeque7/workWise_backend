export default (dependencies) => {
    const { use_case : { deleteTaskUsecase }} = dependencies

    const deleteTaskController  = async(req,res) =>{
        try {
            const taskId = req.query.id; 
            console.log(taskId, "taskId");
            
            const { executeFunction } = await deleteTaskUsecase(dependencies)
            const result  = await executeFunction(taskId)
            if(result){
                return res.status(400).json({ success :false ,message:"error in editing task"})
            }

            return res.status(200).json({success:true , message:"success"})
        } catch (error) {
            console.error(error,"error in deleteTaskController");
            return res.status(500).json({message:"error in deleteTaskController"})
        }
    }
    return deleteTaskController
}