const http = require("http").createServer();
const { Server } = require("socket.io");

const io = new Server(http, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on("message", (message) => {
        io.emit("message", `${socket.id}:: ${message}`);
    });
});

http.listen(3000);