const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3000;

// Middleware to parse both URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve frontend static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// In-memory todo list
let todos = [

];

// Get all todos
app.get('/gettodo', (req, res) => {
  res.json(todos);
});

//  Add a new todo
app.post('/addtodo', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Todo name is required' });
  }

  const newTodo = {
    id: uuidv4(),
    name
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//  Delete a todo by ID
app.post('/deletetodo', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Todo ID is required to delete' });
  }

  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);

  if (todos.length === initialLength) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json({ message: 'Todo deleted successfully', id });
});

//  Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
