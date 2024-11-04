// routes/userProfileRoutes.js
const express = require('express');
const userProfileController = require('../controllers/userProfileController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get user profile
router.get('/', verifyToken, userProfileController.getUserProfile);

// Update user profile
router.put('/', verifyToken, userProfileController.updateUserProfile);

module.exports = router;
