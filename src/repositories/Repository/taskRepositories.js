import Schema from "../../entities/index.js";
import mongoose from "mongoose";
const { User, Task, Notification } = Schema;

export const taskRepository = {
    createTask: async (data, user) => {
        try {
            const person = await User.findById(user)

            if (!person) {
                throw new Error('user not available')
            }

            const taskData = {
                title: data.title,
                priority: data.selectedItem,
                overView: data.overview,
                owner: person._id,

            }
            const task = await Task.create(taskData)
            task.members.push({ member: user });
            await task.save()
            return task

        } catch (error) {
            console.error("Error in creating task:", error.message);
            throw new Error("Database error occurred while creating task.");
        }
    },

     browseTasks :async (skip, limit, action, user) => {
        try {
            let query = {};
            
         
            if (action === 'IN-PROGRESS') {
                query = {
                    members: {
                        $elemMatch: {
                            member: user,
                            memberStatus: 'in progress'
                        }
                    }
                };
            } else if (action === 'COMPLETED') {
                query = {
                    members: {
                        $elemMatch: {
                            member: user,
                            memberStatus: 'completed'
                        }
                    }
                };
            }
    
        
            const tasks = await Task.find(query)
                .populate('owner', 'username email')
                .populate('members.member', 'username email')
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .exec();
    
            const total = await Task.countDocuments(query);
        
            const memberStatusEnum = Task.schema.path('members.memberStatus').enumValues;
    
            const totalPages = Math.ceil(total / limit);
    
            return {
                tasks,
                totalPages,
                memberStatusEnum
            };
        } catch (error) {
            console.error("Error in browseTasks:", error.message);
            throw new Error("Database error occurred while browsing tasks.");
        }
    },
    
    joinTask: async (id, user) => {
        try {
            const task = await Task.findById(id);
            if (!task) {
                return { success: false, message: "task not available" }
            }
            const isMember = task.members.some(member => member.member.equals(user));

            if (isMember) {
                return { success: false, message: "user already an a member of this task" }
            }
            task.members.push({ member: user });
            await task.save();

            return { success: true, task, message: "successfuly joined" };

        } catch (error) {
            console.error("Error in join task:", error.message);
            throw new Error("Database error occurred while join task.");
        }
    },
    leaveTask: async (id, user) => {
        try {
            const task = await Task.findById(id);

            if (!task) {
                return { success: false, message: "Task not available" };
            }

            const isMember = task.members.some(member => member.member.equals(user));

            if (!isMember) {
                return { success: false, message: "User is not a member of this task" };
            }


            task.members = task.members.filter(member => !member.member.equals(user));

            await task.save();

            return { success: true, task, message: "Successfully left the task" };
        } catch (error) {
            console.error("Error in leave task:", error.message);
            throw new Error("Database error occurred while leaving the task.");
        }
    },
    editTaskStatus: async (data, user) => {
        try {
            const { id, statuses } = data;

            console.log(data, "data");
            console.log(user, "user");

            for (let { memberId, status } of statuses) {

                await Task.findOneAndUpdate(
                    { _id: id, "members.member": user },
                    { $set: { "members.$.memberStatus": status } },
                    { new: true }
                );
            }

            console.log("Task status updated successfully.");
            return { message: "Task status updated successfully" };

        } catch (error) {
            console.error("Error in editTaskStatus:", error.message);
            throw new Error("Database error occurred while editTaskStatus.");
        }
    },
    removeMember: async (data, user) => {
        try {
            const { taskId, memberId } = data
            const task = await Task.findOneAndUpdate(
                { _id: taskId, 'members.member': memberId },
                { $pull: { members: { member: memberId } } },
                { new: true }
            );

            if (!task) {
                return { success: false, message: "Task not found or member not part of the task" };
            }

            return { success: true, message: "success" };
        } catch (error) {
            console.error("Error in removeMember:", error.message);
            throw new Error("Database error occurred while removeMember.");
        }
    },
    editTask: async (data) => {
        const { taskId, task } = data;
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                {
                    title: task.title,
                    priority: task.priority,
                    status: task.status,
                    overView: task.overview,
                },
                { new: true, }
            );

            if (!updatedTask) {
                return { success: false, message: "Task not found" }
            }

            return { success: true, message: "task updated successFully" }

        } catch (error) {
            console.error("Error in editTask:", error.message);
            throw new Error("Database error occurred while editTask.");
        }
    },
    browseData: async (user) => {
        try {
            const userId = new mongoose.Types.ObjectId(user);
            const distribution = await Task.aggregate([
                {
                    $match: { 'members.member': userId }
                },
                {
                    $unwind: '$members'
                },
                {
                    $match: { 'members.member': userId }
                },
                {
                    $group: {
                        _id: '$members.memberStatus',
                        count: { $sum: 1 }
                    }
                }
            ]);

            const createdTasks = await Task.countDocuments({ owner: userId });
            const onGoing = await Task.countDocuments({
                'members.member': userId
            });



            return { createdTasks, distribution, onGoing }

        } catch (error) {
            console.error("Error in browseData:", error.message);
            throw new Error("Database error occurred while browsing data.");
        }
    },
    notification: async (data) => {
        try {
            const { userId, taskId, message } = data;


            const newNotification = await Notification.create({
                userId: new mongoose.Types.ObjectId(userId),
                taskId: new mongoose.Types.ObjectId(taskId),
                message: message,
                readBy: [],
            });

            console.log("Notification created:", newNotification);
            return newNotification;

        } catch (error) {
            console.error(error);

        }
    },
    mytasks: async (user) => {
        try {

            const tasks = await Task.find({ owner: user });



            return tasks;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching tasks');
        }
    },
    deleteTask:async(data) =>{
        try {
  
            const result = await Task.findByIdAndDelete(data);

            if (!result) {
                throw new Error('Task not found');
            }
    
            return 
            
        } catch (error) {
            console.error(error);
            throw new Error('Error deleteTask');
        }
    }


}