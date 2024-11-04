require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const journalRoutes = require('./routes/journalRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const therapistProfileRoutes = require('./routes/therapistProfileRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const songRoutes = require('./routes/songRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const db = require('./models'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/booking',bookingRoutes);
app.use('/api/v1/journals', journalRoutes);
app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/profiles/therapist',therapistProfileRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/songs', songRoutes);
app.use('/api/v1/favorites', favoriteRoutes);
// Database synchronization and server start
db.sequelize.sync() // This will sync your database
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
