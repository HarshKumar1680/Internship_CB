const express = require('express');
const session = require('express-session');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 4444;

// Simulated DB (you can replace with MongoDB later)
const users = [];

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

//  Home Route
app.get('/', (req, res) => {
  res.render('home', { user: req.session.user });
});

//  Signup Page
app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.send('User already exists');
  users.push({ username, password });
  res.redirect('/login');
});

//  Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (!found) return res.send('Invalid credentials');
  req.session.user = username;
  res.redirect('/profile');
});

//  Profile Page (Protected)
app.get('/profile', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('profile', { user: req.session.user });
});

//  Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
