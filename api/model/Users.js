const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,  
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    salt: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = UserSchema;
