import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    },
    message: {
        type: String,
        required: true,
    },
    readBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

export const Notification = mongoose.model('Notification', notificationSchema);

