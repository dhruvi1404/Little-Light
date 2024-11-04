// controllers/blogController.js

const blogService = require('../services/blogService');

// Create a new blog post

exports.createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const therapistId = req.user.userId;
        const imageUrl = req.file ? req.file.path : null; // Cloudinary URL will be available in req.file.path

        const blog = await blogService.createBlog({ title, description, therapist_id: therapistId, image: imageUrl });
        res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create blog', error: error.message });
    }
};


// Get all blog posts
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blogs', error: error.message });
    }
};

// Get blog post by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blog', error: error.message });
    }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const blogId = req.params.id;
        const therapistId = req.user.userId;
        const image = req.file ? req.file.path : null;

        const updatedBlog = await blogService.updateBlog(blogId, therapistId, { title, description, image });
        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update blog', error: error.message });
    }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const therapistId = req.user.userId;

        await blogService.deleteBlog(blogId, therapistId);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete blog', error: error.message });
    }
};
