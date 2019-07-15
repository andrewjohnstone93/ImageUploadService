const mongoose = require('mongoose');
const ImageSchema = require('../model/Images');
const Images = mongoose.model('Images', ImageSchema);

export function createMetadata(req, res, next) {
    if(!req.body.label) {
        return res.json({ success: false, message: "Label required" });
    }

    const date = new Date();

    var imageData = {
        uploader: req.JwtUser.username,
        date: date,
        label: req.body.label,
    }

    Images.create(imageData, function (err, result) {
        if (err) {
            return res.json({ success: false, message: "Error creating image metadata" });
        } else {
            return res.json({ success: true, data: result });
        }
    });
}

export function getAllMetadata(req, res, next) {
    Images.find({})
    .then((images) => {
      let imageMap = [];
      images.map((image) => {
        imageMap.push({        
            uploader: image.uploader,
            date: image.date,
            label: image.label,
        });
      });
      return res.json({ success: true, images: imageMap });
    })
}