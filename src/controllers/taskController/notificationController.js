export default  ( dependencies ) => {
    const notificationController =async (req,res) =>{
        const  { use_case : { notificationUsecase } } = dependencies
        try {
            const notification = req.body
            const {executeFunction } = await notificationUsecase(dependencies)
            const result = await executeFunction(notification)
            if(!result){
                return res.status(400).json({message:"error in executeFunction"})
            }
            return res.status(200).json({succes:true , notification :result , message:"success"})
            
        } catch (error) {
            console.error(error, "error in notificationController");
            return res.status(500).json({ message: "error in notificationController " })
        }
    }
    return notificationController
}