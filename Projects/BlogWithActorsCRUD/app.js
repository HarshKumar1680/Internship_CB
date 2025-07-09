const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');
const actorRoutes = require('./routes/actorRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/blogs', blogRoutes);
app.use('/actors', actorRoutes);
app.get('/', (req, res) => res.redirect('/blogs'));

app.listen(4444, () => console.log('Server running on http://localhost:4444'));

