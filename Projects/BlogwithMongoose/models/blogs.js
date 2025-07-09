const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  actor: String,
  description: String,
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

module.exports = Blog;
