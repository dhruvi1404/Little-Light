// routes/favoriteRoutes.js
const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, favoriteController.getFavoriteSongs);
router.post('/', verifyToken, favoriteController.addFavorite);
router.delete('/', verifyToken, favoriteController.removeFavorite);

module.exports = router;
