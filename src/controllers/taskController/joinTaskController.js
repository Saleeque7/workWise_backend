export default (dependencies)=>{
    const joinTaskController =async(req,res) => {
        const {use_case : {jointaskUsecase }} = dependencies
        try {
            const { id} = req.params
            const user = req.userId
            const {executeFunction } = await jointaskUsecase(dependencies)
            const result  = await executeFunction( id , user)
            if(!result.success){
                return res.status(400).json({message:result.message || "issue in controller"})
            }
            return res.status(200).json({success:true , task : result.task , message:"joined successfuly"})
        } catch (error) {
            console.error(error,"error in joinTaskController");
            return res.status(500).json({message:"error in joining in the task"})
            
        }
    }
    return joinTaskController
}