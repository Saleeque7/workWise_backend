export default (dependencies) => {
    const addtaskController = async(req, res) => {
        const { use_case : { addtaskUsecase } } = dependencies
        try {
            const taskData = req.body
            const user = req.userId
              
            if(!taskData){
                return res.status(400).json({message:"credentials missing"})
            }
            const { executeFunction } = await addtaskUsecase(dependencies)
            const result = await executeFunction(taskData,user)

            if(!result){
                return res.status(401).json({message :"error in creating task"})
            }
            console.log(result,"wttt");
            
            
            return res.status(200).json({success:true ,task:result._id,message:"task created successfuly"})
        } catch (error) {
            console.error(error, "error in add task controller");
            return res.status(500).json({  message: "error in adding task" })
        }
    }
    return addtaskController
}