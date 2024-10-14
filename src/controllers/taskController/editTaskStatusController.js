export default (dependencies)=>{
    const {use_case : { editTaskStatususecase }} = dependencies
    const editTaskStatusController = async(req,res) => {
        try {
           const updatedata = req.body
           const user = req.userId
           const { executeFunction } = await editTaskStatususecase(dependencies)
           const result  = await executeFunction(updatedata , user)
           if(!result.success){
            return res.status(400).json({message:result.message || "issue in controller"})
        }
        return res.status(200).json({success:true  , message:result.message})
        } catch (error) {
            console.error(error,"error in editTaskStatusController");
            return res.status(500).json({message:"error in edit tasks"})
        }
    }
    return editTaskStatusController 
}