const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
const todoRoutes = require('./routes/todos');
app.use('/', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
