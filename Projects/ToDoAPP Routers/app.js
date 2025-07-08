// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// Import and use todo routes
const todoRoutes = require('./routes/todos');
app.use('/', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
