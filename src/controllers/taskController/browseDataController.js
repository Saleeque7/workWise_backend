export default (dependencies) => {
    const browseDataController = async (req, res) => {
        const { use_case: { browseDataUsecase } } = dependencies

        try {
            const user = req.userId
            const { executeFunction } = await browseDataUsecase(dependencies)
            const result = await executeFunction(user)
            if (!result.success) {
                return res.status(400).json({success:fasle , message: result.message || "something went wrong" })
            }
         

            return res.status(200).json({success:true , message: "success", createdTasks: result.result.createdTasks, piedata: result.result.distribution, onGoing: result.result.onGoing })
        } catch (error) {
            console.error(error, "error in browseDataController");
            return res.status(500).json({ message: "error in fetching task info" })
        }
    }
    return browseDataController
}