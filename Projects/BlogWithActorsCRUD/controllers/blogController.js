 const Blog = require('../models/Blog');

exports.index = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.render('blogs/index', { blogs });
};

exports.newForm = (req, res) => res.render('blogs/new');

exports.create = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/blogs');
};

exports.detail = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('blogs/detail', { blog });
};

exports.editForm = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('blogs/edit', { blog });
};

exports.update = async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/blogs');
};

exports.delete = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect('/blogs');
};

