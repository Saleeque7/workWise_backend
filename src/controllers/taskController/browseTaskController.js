export default (dependencies)=>{
    const browseTaskController = async(req,res)=>{
        const {use_case : { browseTaskusecase }} = dependencies
        try {
            const { page , limit , action  } = req.query
            const user = req.userId
            const { executeFunction } = await browseTaskusecase(dependencies)
            const { tasks ,totalPages ,memberStatusEnum} = await executeFunction(page,limit ,action ,user)

            if(!tasks || !totalPages){
                return res.status(400).json({message:"failed to load tasks"})
            }

            return res.status(200).json({success:true , tasks , totalPages  ,memberStatusEnum})
            
        } catch (error) {
            console.error(error,"error in browseTaskController");
            return res.status(500).json({message:"error in browse tasks"})
        }
    }
    return browseTaskController
}