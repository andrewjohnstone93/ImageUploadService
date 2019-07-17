import SocketIO from 'socket.io';

export function startServer(server) {
    var io = new SocketIO(server);

    io.on('connection', function(socket){
        console.log('A user connected: ' + socket.id);
        //Get upload notifcation from client
        socket.on('fileUpload', function(data) {
            //Send upload notification to client
            io.emit('fileUploaded');
          });  
    });
}
