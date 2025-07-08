const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ priority: 1 });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const { name } = req.body;
  const count = await Todo.countDocuments();

  const newTodo = new Todo({
    name,
    priority: count + 1
  });

  await newTodo.save();
  res.status(201).json(newTodo);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.body;
  const deleted = await Todo.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
};

// Priority Up
exports.moveUp = async (req, res) => {
  const { id } = req.body;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ error: 'Not found' });

  const above = await Todo.findOne({ priority: todo.priority - 1 });
  if (above) {
    [todo.priority, above.priority] = [above.priority, todo.priority];
    await todo.save();
    await above.save();
  }
  res.json({ message: 'Moved up' });
};

// Priority Down
exports.moveDown = async (req, res) => {
  const { id } = req.body;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ error: 'Not found' });

  const below = await Todo.findOne({ priority: todo.priority + 1 });
  if (below) {
    [todo.priority, below.priority] = [below.priority, todo.priority];
    await todo.save();
    await below.save();
  }
  res.json({ message: 'Moved down' });
};
