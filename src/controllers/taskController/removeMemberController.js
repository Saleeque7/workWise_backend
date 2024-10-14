export default (dependencies) => {
    const { use_case: { removeMemberUsecase } } = dependencies
    const removeMemberController = async (req, res) => {
        try {
            const data = req.body
            const user = req.userId
            const { executeFunction } = await removeMemberUsecase(dependencies)
            const result = await executeFunction(data, user)
            if (!result.success) {
                return res.status(400).json({ message: result.message || "issue in controller" })
            }
            return res.status(200).json({ success: true, message: result.message })
        } catch (error) {
            console.error(error, "error in removeMemberController");
            return res.status(500).json({ message: "error in removeMember in the task" })
        }
    }
    return removeMemberController
}