// routes/feedbackRoutes.js
const express = require('express');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

// Endpoint for creating feedback
router.post('/', feedbackController.createFeedback);

module.exports = router;
