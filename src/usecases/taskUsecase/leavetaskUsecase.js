export const leavetaskUsecase  = (dependencies) => {
    const { repositories : { taskRepository : { leaveTask }} } = dependencies

    const executeFunction = async (id,user )=>{
        try {
            const result  = await leaveTask(id,user)
            if(!result.success){
                return {success:false , message : result.message || "something went wrong"}
            }
            return {success:true ,task : result.task , message:result.message || "user leaveed"}
        } catch (error) {
            throw error
        }
    }
    return {executeFunction}
}
