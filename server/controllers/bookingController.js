// controllers/bookingController.js
const bookingService = require('../services/bookingService');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        await bookingService.createBooking(bookingData);
        res.status(201).json({ message: 'Booking Successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error while booking', error: error.message });
    }
};

// Get booking statuses
exports.getBookingStatus = async (req, res) => {
    try {
        const bookings = await bookingService.getBookingStatus();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error while fetching booking status', error: error.message });
    }
};

// Update booking status
exports.updateStatus = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const { status } = req.body;
        await bookingService.updateStatus(bookingId, status);
        res.status(200).json({ message: 'Status Updated Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error while updating status', error: error.message });
    }
};
