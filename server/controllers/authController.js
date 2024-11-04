const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models'); // Sequelize models
const jwtService = require('../services/jwtService'); // For generating and verifying JWTs
const userService = require('../services/userService'); // User-specific logic
const { JWT_SECRET } = process.env; // Ensure you have JWT_SECRET in your .env file

// Register Controller
exports.register = async (req, res) => {
    try {
        const { email, password, role, firstName, lastName } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        let user;
        if (role === 'THERAPIST') {
            user = await db.Therapist.create({
                email,
                password: hashedPassword,
                firstName,
                lastName,
                role
            });
        } else {
            user = await db.User.create({
                email,
                password: hashedPassword,
                firstName,
                lastName,
                role: 'USER'
            });
        }
        
        const token = jwtService.generateToken(user); // Create a JWT for the user
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(400).json({ message: 'Registration failed', error: error.message });
    }
};

// Login Controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwtService.generateToken(user); // Issue a JWT
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

// Forgot Password Controller
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await userService.forgotPassword(email);
        res.status(200).json({ message: 'Password reset link sent', result });
    } catch (error) {
        console.error("Error during forgot password:", error);
        res.status(500).json({ message: 'Failed to process password reset', error: error.message });
    }
};

// Logout Controller (placeholder)
exports.logout = (req, res) => {
    // Usually JWT-based logout is managed client-side by deleting the token
    res.status(200).json({ message: 'Logout successful' });
};
