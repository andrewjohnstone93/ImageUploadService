const mongoose = require('mongoose');
const socket = require('socket.io');
const NodeRSA = require('node-rsa');

const ImageSchema = require('../model/Images');
const Images = mongoose.model('Images', ImageSchema);

export function serve(server) {
    const serverKey = new NodeRSA({ b: 2048 });
    const serverPublicKey = serverKey.exportKey('pkcs8-public');
    var clientPublicKey;

    const io = socket.listen(server);

    io.on('connection', function (socket) {
        console.info(`Client connected [id=${socket.id}]`);
        console.log(serverKey.encrypt("test", 'base64'));

        socket.send(serverPublicKey);

        //Get images uploaded from user
        socket.on('IMAGE_UPLOAD', (image) => {
            try {
                const decrypted = serverKey.decrypt(image.data, 'utf8');

                var query = { '_id': image.id };
                newData.image = decrypted;

                Images.findOneAndUpdate(query, req.newData, { upsert: true }, function (err, doc) {
                    if(err) {
                        console.log(err);
                        throw "Database error"
                    }

                    socket.broadcast.send('IMAGE_UPLOADED') 
                })
            } catch(err) {
                console.log(err)
            }
        });

        //Get Clients public key 
        socket.on('CLIENT_PUBLIC_KEY', (k) => {
            try {
                clientPublicKey = new NodeRSA(k)
            } catch(err) {
                console.log(err)
            }
        });

        //decrypt & send image back to clinet based on ID
        socket.on('REQUEST_IMAGE', (id) => {
            Images.findOne({ _id: id }).then((image, err) => {
                socket.emit("REQUESTED_IMAGE", clientPublicKey.decrypt(image.image, "base64"));
            })
        })

    });
}

