'use strict';

var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const googleSignIn = require('../middleware/gSignIn');

router.post('/signIn', googleSignIn, UserController.signIn);
<<<<<<< HEAD
=======
// router.get('/:id', UserController.getHome);
>>>>>>> be1242979ac3cca2926d90d1c578c8a6df70819c

module.exports = router;
