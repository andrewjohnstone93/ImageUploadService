const mongoose = require('mongoose');
const ImageSchema = require('../model/Images');
const Images = mongoose.model('Images', ImageSchema);
var fs = require('fs');

export function uploadImage(req, res, next) {
    if(!req.file) {
        return res.json({ success: false, message: "Image required" });
    }

    const date = new Date();

    var imageData = {
        uploader: req.JwtUser.username,
        date: date,
        label: req.body.label,
        image: req.file.path
    }

    Images.create(imageData, function (err, result) {
        if (err) {
            console.log(err);
            return res.json({ success: false, message: "Error creating image metadata" });
        } else {
            return res.json({ success: true, data: result });
        }
    });
}

export function getall(req, res, next) {
    Images.find({})
        .then((images) => {
            let imageMap = [];
            images.map((image) => {
                imageMap.push({
                    id: image._id,
                    uploader: image.uploader,
                    date: image.date,
                    label: image.label,
                    image: image.image
                });
            });
            return res.json({ success: true, images: imageMap });
        })
}