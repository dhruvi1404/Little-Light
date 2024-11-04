// controllers/songController.js
const { Song, Category, Artist } = require('../models');

// Get songs by category name
exports.getSongsByCategoryName = async (req, res) => {
    try {
        const categoryName = req.query.categoryName;
        const category = await Category.findOne({ where: { name: categoryName } });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const songs = await Song.findAll({
            where: { categoryId: category.id },
            include: [{ model: Artist, as: 'artist' }]
        });

        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching songs', error: error.message });
    }
};
