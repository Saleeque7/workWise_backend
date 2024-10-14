import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
  },
  status: {
    type: String,
    enum: ['not-available', 'Active', 'completed'],
    default: 'Active' 
  },
  overView:{
    type:String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  members: [
    {
      member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
      },
      memberStatus: {
        type: String,
        enum: ['To-do', 'in progress', 'completed'],
        default: 'To-do' 
      }
    }
  ]
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
