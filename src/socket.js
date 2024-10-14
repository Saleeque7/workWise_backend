
export default function setupSocketHandlers(io) {
    let activeUsers = [];
    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);
  
      socket.on("connect", (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
          activeUsers.push({ userId: newUserId, socketId: socket.id });
          console.log("New User Connected", activeUsers);
        }
        io.emit("get-users", activeUsers);
      });
  
      socket.on("add_task", (data) => {
        console.log(data ,"what is data");
        
        const { receiverId } = data
        const user = activeUsers.find((user) => user.userId === receiverId)
        console.log("sending from  soket to :", receiverId);
        console.log("sending from  soket to ui  data", data);
        if (user) {
          io.to(user.socketId).emit('receive-message', data)
        }
      })
  
  
     
  
     
  
  
      socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        console.log("User Disconnected", activeUsers);
        io.emit("get-users", activeUsers);
      });
    });
  }