// services/blogService.js

const { Blog } = require('../models');

// Create a new blog
exports.createBlog = async (data) => {
    return await Blog.create(data);
};

// Get all blogs
exports.getAllBlogs = async () => {
    return await Blog.findAll({ include: 'Therapist' });  // Adjust associations as needed
};

// Get a single blog by ID
exports.getBlogById = async (id) => {
    return await Blog.findByPk(id, { include: 'Therapist' });
};

// Update a blog
exports.updateBlog = async (id, therapistId, data) => {
    const blog = await Blog.findOne({ where: { id, therapist_id: therapistId } });
    if (!blog) throw new Error('Blog not found or not authorized');
    return await blog.update(data);
};

// Delete a blog
exports.deleteBlog = async (id, therapistId) => {
    const blog = await Blog.findOne({ where: { id, therapist_id: therapistId } });
    if (!blog) throw new Error('Blog not found or not authorized');
    await blog.destroy();
};
