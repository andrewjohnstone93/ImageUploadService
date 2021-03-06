import express from 'express';
import { urlencoded, json } from 'body-parser';
import { connect } from 'mongoose';
import { createServer } from 'http';
import cors from 'cors';

import users from './route/users';
import images from './route/images';
import { jwtMiddleWare, proctectRoute } from './util/JwtHelpers';
import { config } from './config/config'
import { startServer } from './controller/Socket'

//Connect to MongoDB
Promise = global.Promise;
connect(config().MONGODB_CONNECTION).catch(err => { console.error('Error Connecting to MongoDB:', err.stack) })

//Setup Express & Middlewares
const app = express();
app.use(jwtMiddleWare);
app.use(urlencoded({ limit: '50mb', extended: true }));
app.use(json({ limit: '50mb' }));
app.use(cors());

//Setup Routes 
app.get('/', (req, res) => {res.send('Encrypted Image Hosting Service API');});
app.use('/users', users);
app.use('/images', proctectRoute, images);

//Run Express Server
const server = createServer(app).listen(config().PORT_NUMBER, function(){
    console.log("API Service listening on port 4000");
});

//Socket IO
startServer(server)

//Export server for testing
module.exports = server;