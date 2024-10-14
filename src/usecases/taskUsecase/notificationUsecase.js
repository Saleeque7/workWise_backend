export const notificationUsecase = (dependencies) =>{
    const executeFunction = async(data) =>{
    const { repositories : { taskRepository : { notification }} } = dependencies
        try {
            const result  = await notification (data)
            return result
        } catch (error) {
            throw error
        }
    }
    return { executeFunction }
}