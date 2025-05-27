const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const validateNewUser = require('../validations/validateNewUser');
const generateToken = require('../middleware/generateToken');
const validateLogin = require('../validations/validateLogin');

// POST http://localhost:5000/api/auth/register
router.post('/register', validateNewUser, authController.register)

// POST http://localhost:5000/api/auth/login
router.post('/login', generateToken, validateLogin, authController.login)

module.exports = router; 
