export const mytaskUsecase = (dependencies) => {
    const { repositories: { taskRepository: { mytasks } } } = dependencies;
  
    const executeFunction = async (user) => {
      try {

        const tasks = await mytasks(user);
        return tasks;
      } catch (error) {
        throw error;
      }
    };
  
    return { executeFunction };
  };
  