// services/bookingService.js
const { Booking } = require('../models');

exports.createBooking = async (bookingData) => {
    return await Booking.create(bookingData);
};

exports.getBookingStatus = async () => {
    return await Booking.findAll();
};

exports.updateStatus = async (bookingId, status) => {
    const booking = await Booking.findByPk(bookingId);
    if (booking) {
        booking.appointment_status = status;
        return await booking.save();
    }
    throw new Error('Booking not found');
};
