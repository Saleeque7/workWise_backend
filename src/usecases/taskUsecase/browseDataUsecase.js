export const browseDataUsecase = (dependencies) => {
    const { repositories: { taskRepository: { browseData } } } = dependencies

    const executeFunction = async (user) => {
        try {
            const result  = await browseData(user) 
            if(!result){
                return {success:false , message : "something went wrong"}
            }
            return {success:true , result }
        } catch (error) {
            throw error
        }
    }
    return {executeFunction}
}