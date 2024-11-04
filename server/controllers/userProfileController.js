// controllers/userProfileController.js
const userService = require('../services/userService');

// Get user profile details
exports.getUserProfile = async (req, res) => {
    try {
        const email = req.user.email; // Assume email is attached to req.user after authentication
        const user = await userService.getUserProfile(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found', error: error.message });
    }
};

// Update user profile details
exports.updateUserProfile = async (req, res) => {
    try {
        const email = req.user.email; // Assume email is attached to req.user after authentication
        const updates = req.body;
        const updatedUser = await userService.updateUserProfile(email, updates);
        res.status(200).json({ message: 'User profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(404).json({ message: 'Failed to update profile', error: error.message });
    }
};
