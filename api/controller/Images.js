import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

import ImageSchema from '../model/Images';

const Images = mongoose.model('Images', ImageSchema);

export function uploadImage(req, res, next) {
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    if(!req.body.label) {
        return res.json({ success: false, message: "Label required" });
    }

    if(!req.file) {
        return res.json({ success: false, message: "Image required" });
    }

    if(!validImageTypes.includes(req.file.mimetype)) {
        return res.json({ success: false, message: "Must be gif, jpeg, png" });
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
            return res.json({ success: false, message: "Error creating image metadata" });
        } else {    
            return res.json({ success: true, data: result });
        }
    });
}

export function getall(req, res, next) {
    Images.find({})
        .sort({date: 'descending'})
        .then((images) => {
            let imageMap = [];
            images.map((image) => {
                var bitmap = fs.readFileSync(image.image);
                var base64Image = new Buffer(bitmap).toString('base64');
                var fileType = path.extname(image.image);

                imageMap.push({
                    id: image._id,
                    uploader: image.uploader,
                    date: image.date,
                    label: image.label,
                    image: `data:image/${fileType};charset=utf-8;base64,${base64Image}`, 
                });
            });
            return res.json({ success: true, images: imageMap });
        }).catch((err) => {console.log(err)});
}