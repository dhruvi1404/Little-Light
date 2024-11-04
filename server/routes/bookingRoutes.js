// routes/bookingRoutes.js
const express = require('express');
const bookingController = require('../controllers/bookingController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for creating and managing bookings
router.post('/create', verifyToken, checkRole('USER'), bookingController.createBooking); // User can create a booking
router.get('/getStatus', verifyToken, bookingController.getBookingStatus); // Anyone with a token can view booking statuses
router.put('/status/:id', verifyToken, checkRole('THERAPIST'), bookingController.updateStatus); // Only therapists can update statuses

module.exports = router;
