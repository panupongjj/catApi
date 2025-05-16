const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController')

router.get('/',usersController.getUser)
router.post('/',usersController.postUser)

module.exports = router; 
