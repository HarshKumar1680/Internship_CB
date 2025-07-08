// routes/todos.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory todos array (temporary)
let todos = [];

// GET all todos
router.get('/gettodo', (req, res) => {
  res.json(todos);
});

// POST add a new todo
router.post('/addtodo', (req, res) => {
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

// POST delete a todo
router.post('/deletetodo', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Todo ID is required to delete' });
  }

  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);

  if (todos.length === initialLength) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json({ message: 'Todo deleted', id });
});

module.exports = router;
