export default (dependencies) => {
    const LeaveTaskController = async(req,res) => {
        const {use_case : {leavetaskUsecase }} = dependencies
        try {
       
            const { id} = req.params
            const user = req.userId
            const {executeFunction } = await leavetaskUsecase(dependencies)
            const result  = await executeFunction( id , user)
            if(!result.success){
                return res.status(400).json({message:result.message || "issue in controller"})
            }
            return res.status(200).json({success:true , task : result.task , message:result.message})
        } catch (error) {
            console.error(error,"error in LeaveTaskController");
            return res.status(500).json({message:"error in leave the task"})
            
        }
    }
    return LeaveTaskController 
}