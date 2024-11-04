// routes/blogRoutes.js

const express = require('express');
const blogController = require('../controllers/blogController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const upload = require('../config/multer');

const router = express.Router();

// Only therapists can create, update, and delete blogs
router.post('/', verifyToken, checkRole('THERAPIST'), upload.single('image'), blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', verifyToken, checkRole('THERAPIST'), blogController.updateBlog);
router.delete('/:id', verifyToken, checkRole('THERAPIST'), blogController.deleteBlog);

module.exports = router;
