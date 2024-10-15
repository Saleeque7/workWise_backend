export default (dependencies) => {
    const { use_case: { mytaskUsecase } } = dependencies;
  
    const mytaskController = async (req, res) => {
      try {
        const user = req.userId;
 
        const { executeFunction } = mytaskUsecase(dependencies);
        const result = await executeFunction(user);
    
        if (!result) {
          return res.status(400).json({ success: false, message: "Error in fetching tasks" });
        }
  
        return res.status(200).json({ success: true, tasks: result, message: "My tasks" });
        
      } catch (error) {
        console.error("Error in fetching tasks", error);
        return res.status(500).json({ message: 'Error in fetching tasks' });
      }
    };
  
    return mytaskController;
  };
  