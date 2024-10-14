export const editTaskUsecase = (dependencies) => {
    const { repositories : { taskRepository : { editTask }} } = dependencies

    const executeFuction = async (TaskData) => {
        try {
            const result  = await editTask(TaskData)
            if(!result.success){
                return {success:false , message :  "something went wrong"}
            }
            return {success:true , message:result.message || "task edited"}
        } catch (error) {
            throw error
        }
    }
    return { executeFuction }
}