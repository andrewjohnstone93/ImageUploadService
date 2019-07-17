const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    uploader: {
        type: String,
        trim: true,  
        required: true,
    },
    date: {
        type: Date,
        trim: true,
        required: true,
    },
    label: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    }
});

module.exports = ImageSchema;
