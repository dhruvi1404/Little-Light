const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Forgot Password
router.post('/forgot', authController.forgotPassword);

// Logout
router.post('/logout', authController.logout);

module.exports = router;
