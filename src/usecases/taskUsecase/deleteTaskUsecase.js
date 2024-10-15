export const deleteTaskUsecase = (dependencies) => {
    const { repositories: { taskRepository: { deleteTask } } } = dependencies

    const executeFunction = async(data) => {
        try {
            const result  = await deleteTask(data)

            return result
            
        } catch (error) {
            throw error
        }
    }
    return  {executeFunction}
}