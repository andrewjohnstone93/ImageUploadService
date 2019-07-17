const socket = require('socket.io');

export function serve(server) {

    const io = socket.listen(server);

    io.on('connection', function (socket) {
        console.info(`Client connected [id=${socket.id}]`);

        socket.on('CLIENT_FILE_UPLOAD', (message) => {
            console.log("Client public key recieved");
            socket.broadcast.emit("SERVER_FILE_UPLOADED", {})
        });
    });
}

