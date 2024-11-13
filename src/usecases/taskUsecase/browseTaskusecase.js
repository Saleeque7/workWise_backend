export const browseTaskusecase = (dependencies)=>{
    const { repositories : { taskRepository : { browseTasks }} } = dependencies

    const executeFunction = async(page , limit , action , user) =>{
        try {
       
            const skip = (page - 1) * limit;
            const { tasks , totalPage , memberStatusEnum}  = await browseTasks(skip ,limit ,action, user)

    
            const totalPages = Math.ceil(totalPage/limit)
            return {
                tasks ,
                totalPages,
                memberStatusEnum
            }  
        } catch (error) {
            throw error
        }
    }
    return {executeFunction}
}