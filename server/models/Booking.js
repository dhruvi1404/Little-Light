// models/Booking.js
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_day_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        therapist_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patient_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appointment_status: {
            type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'CANCELLED'), // Add other statuses as needed
            allowNull: false,
            defaultValue: 'PENDING'
        },
        createdDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return Booking;
};
