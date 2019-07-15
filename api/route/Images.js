import {createMetadata, getAllMetadata} from '../controller/Images'

const express = require('express');
const router = express.Router();

router.post('/createMetaData', createMetadata);
router.get('/getAllMetadata', getAllMetadata)

module.exports = router;
