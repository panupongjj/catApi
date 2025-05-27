const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const validateNewUser = require('../validations/validateNewUser');
const validateLogin = require('../validations/validateLogin');

// POST http://localhost:5000/api/auth/register
router.post('/register', validateNewUser, authController.register)

// POST http://localhost:5000/api/auth/login
router.post('/login', validateLogin, authController.login)

module.exports = router; 
