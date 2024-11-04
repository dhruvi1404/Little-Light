// controllers/favoriteController.js
const { Favorite, Song, User } = require('../models');

// Get all favorite songs by user
exports.getFavoriteSongs = async (req, res) => {
    try {
        const userId = req.user.id;
        const favorites = await Favorite.findAll({
            where: { userId },
            include: [{ model: Song, as: 'song' }]
        });
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching favorites', error: error.message });
    }
};

// Add a song to favorites
exports.addFavorite = async (req, res) => {
    try {
        const userId = req.user.id;
        const { songId } = req.body;

        await Favorite.create({ userId, songId });
        res.status(201).json({ message: 'Song added to favorites' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding favorite', error: error.message });
    }
};

// Remove a song from favorites
exports.removeFavorite = async (req, res) => {
    try {
        const userId = req.user.id;
        const { songId } = req.body;

        const favorite = await Favorite.findOne({ where: { userId, songId } });
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        await favorite.destroy();
        res.json({ message: 'Favorite removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing favorite', error: error.message });
    }
};
