// services/therapistService.js
const { Therapist } = require('../models');

// Get therapist profile by email
exports.getTherapistByEmail = async (email) => {
    return await Therapist.findOne({ where: { email } });
};

// Update therapist profile
exports.updateTherapistProfile = async (email, updatedData) => {
    const therapist = await Therapist.findOne({ where: { email } });
    if (!therapist) throw new Error('Therapist not found');
    await therapist.update(updatedData);
    return therapist;
};

// Get all therapists
exports.getAllTherapists = async () => {
    return await Therapist.findAll();
};
