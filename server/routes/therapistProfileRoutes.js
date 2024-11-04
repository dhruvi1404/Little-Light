// routes/therapistRoutes.js
const express = require('express');
const therapistProfileController = require('../controllers/therapistProfileController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');

const router = express.Router();

// Endpoint for therapist profile
router.get('/', verifyToken, checkRole('THERAPIST'), therapistProfileController.getTherapistProfile);
router.put('/', verifyToken, checkRole('THERAPIST'), therapistProfileController.updateTherapistProfile);
router.get('/all', verifyToken, checkRole('THERAPIST'), therapistProfileController.getAllTherapists);

module.exports = router;
