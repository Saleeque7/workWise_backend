export const editTaskStatususecase  = (dependencies) =>{
    const executeFunction = async (data ,user )=>{
        const { repositories : { taskRepository : { editTaskStatus }} } = dependencies

        try {
            const result  = await editTaskStatus(data,user)
            if(!result){
                return {success:false , message : "something went wrong"}
            }
            return {success:true  , message:result.message || "memeber status chnaged"}
        } catch (error) {
            throw error 
        }    
    }
    return {executeFunction}
}