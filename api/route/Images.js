import {uploadImage, getall} from '../controller/Images'

const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(file);
      cb(null, path.join('/app/server/uploads'))
    },
    filename: (req, file, cb) => {
      const newFilename = uuidv4() + path.extname(file.originalname);
      cb(null, newFilename);
    },
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({ storage });


router.post('/upload',upload.single('file'), uploadImage);
router.get('/getall', getall)

module.exports = router;
