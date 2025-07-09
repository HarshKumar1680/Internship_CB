 const mongoose = require('mongoose');
const actorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  movies: [String]
}, { timestamps: true });

module.exports = mongoose.model('Actor', actorSchema);

