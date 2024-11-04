const db = require('../models');

exports.findUserByEmail = async (email) => {
    let user = await db.User.findOne({ where: { email } });
    if (!user) user = await db.Therapist.findOne({ where: { email } });
    return user;
};

// Get user profile details
exports.getUserProfile = async (email) => {
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("User not found");
    return user;
};

// Update user profile details
exports.updateUserProfile = async (email, updates) => {
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("User not found");
    Object.assign(user, updates); // Merge updates into the user object
    await user.save();
    return user;
};

exports.forgotPassword = async (email) => {
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    // Logic for password reset would typically include generating a reset token
    return "Password reset functionality (e.g., send reset email) is not implemented.";
};
