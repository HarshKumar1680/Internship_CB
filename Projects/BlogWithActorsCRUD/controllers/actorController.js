 const Actor = require('../models/Actor');

exports.index = async (req, res) => {
  const actors = await Actor.find().sort({ createdAt: -1 });
  res.render('actors/index', { actors });
};

exports.newForm = (req, res) => res.render('actors/new');

exports.create = async (req, res) => {
  await Actor.create(req.body);
  res.redirect('/actors');
};

exports.delete = async (req, res) => {
  await Actor.findByIdAndDelete(req.params.id);
  res.redirect('/actors');
};

