const { v4: uuidv4 } = require('uuid');
const { readTodos, writeTodos } = require('../models/todoModel');

// GET all todos
function getTodos(req, res) {
  const todos = readTodos();
  res.json(todos);
}

// ADD todo
function addTodo(req, res) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });

  const todos = readTodos();
  todos.push({ id: uuidv4(), name });
  writeTodos(todos);

  res.status(201).json({ message: 'Todo added' });
}

// DELETE todo
function deleteTodo(req, res) {
  const { id } = req.body;
  let todos = readTodos();

  const newTodos = todos.filter(todo => todo.id !== id);
  if (todos.length === newTodos.length)
    return res.status(404).json({ error: 'Todo not found' });

  writeTodos(newTodos);
  res.json({ message: 'Todo deleted' });
}

// MOVE UP
function moveUp(req, res) {
  const { id } = req.body;
  let todos = readTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index > 0) {
    [todos[index - 1], todos[index]] = [todos[index], todos[index - 1]];
    writeTodos(todos);
  }
  res.json({ message: 'Moved up' });
}

// MOVE DOWN
function moveDown(req, res) {
  const { id } = req.body;
  let todos = readTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index < todos.length - 1 && index !== -1) {
    [todos[index + 1], todos[index]] = [todos[index], todos[index + 1]];
    writeTodos(todos);
  }
  res.json({ message: 'Moved down' });
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  moveUp,
  moveDown
};
