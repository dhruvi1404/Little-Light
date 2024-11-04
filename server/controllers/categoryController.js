
const { Category } = require('../models');

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        if (categories.length === 0) {
            return res.status(204).send(); // No content if categories are empty
        }
        
        // Format the categories if needed
        const formattedCategories = categories.map(category => ({
            id: category.id,
            name: category.name,
            imagePath: category.imagePath,
        }));

        res.status(200).json(formattedCategories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
};
