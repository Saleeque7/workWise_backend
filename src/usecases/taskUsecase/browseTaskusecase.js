export const browseTaskusecase = (dependencies)=>{
    const { repositories : { taskRepository : { browseTask , browseProgressTask , browseCompletedTask }} } = dependencies

    const executeFunction = async(page , limit , action , user) =>{
        try {
       
       
            const { tasks , total , memberStatusEnum}  = await browseTask(skip ,limit ,action, user)

    
            const totalPages = Math.ceil(total/limit)
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