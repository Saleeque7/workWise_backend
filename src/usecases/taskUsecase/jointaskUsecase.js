export const jointaskUsecase  = (dependencies) => {
    const { repositories : { taskRepository : { joinTask }} } = dependencies

    const executeFunction = async (id,user )=>{
        try {
            const result  = await joinTask(id,user)
            if(!result.success){
                return {success:false , message : result.message || "something went wrong"}
            }
            return {success:true ,task : result.task , message:result.message || "user joined"}
        } catch (error) {
            throw error
        }
    }
    return {executeFunction}
}
