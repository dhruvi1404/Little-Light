// services/feedbackService.js
const { Feedback } = require('../models');

exports.saveFeedback = async (feedbackData) => {
    return await Feedback.create(feedbackData);
};
