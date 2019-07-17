import {create, authenticate, verify} from '../controller/Users'

const express = require('express');
const router = express.Router();

router.post('/register', create);
router.post('/authenticate', authenticate);
router.post('/verify', verify);

module.exports = router;
