// controllers/therapistProfileController.js
const therapistService = require('../services/therapistService');

// Get therapist profile by email
exports.getTherapistProfile = async (req, res) => {
    try {
        const therapist = await therapistService.getTherapistByEmail(req.user.email);
        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }
        res.status(200).json(therapist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
};

// Update therapist profile
exports.updateTherapistProfile = async (req, res) => {
    try {
        const updatedTherapist = await therapistService.updateTherapistProfile(req.user.email, req.body);
        res.status(200).json(updatedTherapist);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
};

// Get all therapists
exports.getAllTherapists = async (req, res) => {
    try {
        const therapists = await therapistService.getAllTherapists();
        res.status(200).json(therapists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching therapists', error: error.message });
    }
};
