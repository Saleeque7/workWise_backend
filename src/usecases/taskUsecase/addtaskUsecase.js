export const addtaskUsecase = (dependencies) =>{
    const { repositories : { taskRepository : { createTask }} } = dependencies
    const executeFunction = async(data,user) => {
        try {
            const result  = await createTask(data,user)

            return result
        } catch (error) {
            console.error(error ,"erro in addtaskUsecase")   
            throw error;       
        }
        
    }
    return { executeFunction }
}