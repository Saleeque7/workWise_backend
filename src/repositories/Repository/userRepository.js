import Schema from '../../entities/index.js';

const { User } = Schema;

export const userRepository = {
    findUserByEmail: async (email) => {
        try {
            const user = await User.findOne({ email });
            return user; 
        } catch (error) {
            console.error("Error in finding user by email:", error);
            throw new Error("Database error occurred while fetching user."); 
        }
    },
    createUser: async (userData, password) => {
        try {
            const userInfo = {
                username: userData.name,
                email: userData.email,
                password: password,
                phoneNumber: userData.phone
            };
    
            const user = await User.create(userInfo);
            return user;
        } catch (error) {
            console.error("Error in creating user:", error.message);
            throw new Error("Database error occurred while creating user.");
        }
    }
    
};
