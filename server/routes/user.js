'use strict';

var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const googleSignIn = require('../middleware/gSignIn');

router.post('/signIn', googleSignIn, UserController.signIn);
// router.get('/:id', UserController.getHome);

module.exports = router;
