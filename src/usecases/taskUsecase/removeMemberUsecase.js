export const removeMemberUsecase = (dependencies) => {
    const { repositories: { taskRepository: { removeMember } } } = dependencies

    const executeFunction = async (data, user) => {
        try {
            const result = await removeMember(data, user)
            if (!result.success) {
                return { success: false, message: "something went wrong" }
            }
            return { success: true, message: result.message || "memeber removed" }

        } catch (error) {
            throw error
        }
    }
    return { executeFunction }
}