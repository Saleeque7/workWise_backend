export const browseTaskusecase = (dependencies)=>{
    const { repositories : { taskRepository : { browseTask , browseProgressTask , browseCompletedTask }} } = dependencies

    const executeFunction = async(page , limit , action , user) =>{
        try {
       

            if(action === 'AllTask'){

                const skip = (page - 1) * limit;
                const { tasks , total , memberStatusEnum}  = await browseTask(skip ,limit)
    
                const totalPages = Math.ceil(total/limit)
    
                return {
                    tasks ,
                    totalPages,
                    memberStatusEnum
                }
            }else if (action === 'progress'){
                const skip = (page - 1) * limit;
                const { tasks , total , memberStatusEnum}  = await browseProgressTask(skip ,limit , user)
    
                const totalPages = Math.ceil(total/limit)
    
                return {
                    tasks ,
                    totalPages,
                    memberStatusEnum
                }
                
            }else if(action === 'completed'){
                const skip = (page - 1) * limit;
                const { tasks , total , memberStatusEnum}  = await browseCompletedTask(skip ,limit , user)
    
                const totalPages = Math.ceil(total/limit)
    
                return {
                    tasks ,
                    totalPages,
                    memberStatusEnum
                }
                
            }
            
            
        } catch (error) {
            throw error
        }
    }
    return {executeFunction}
}