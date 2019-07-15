import express from 'express';
import { urlencoded, json } from 'body-parser';
import { connect } from 'mongoose';
import { createServer } from 'http';

//Connect to MongoDB
Promise = global.Promise;
connect("mongodb://mongo:27017/imageHost").catch(err => { console.error('Error Connecting to MongoDB:', err.stack) })

//Setup Express & Middleware
const app = express();
app.use(urlencoded({ extended: true }))
app.use(json());

//Setup Routes 
app.get('/', (req, res) => {res.send('Encrypted Image Hosting Service API');});

//Run Express Server
const server = createServer(app).listen(4000, function(){
    console.log("API Service listening on port 4000");
});

//Export server for testing
module.exports = server;