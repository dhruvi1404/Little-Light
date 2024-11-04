// controllers/feedbackController.js
const feedbackService = require('../services/feedbackService');

// Create new feedback
exports.createFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;
        const feedback = await feedbackService.saveFeedback(feedbackData);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create feedback', error: error.message });
    }
};
