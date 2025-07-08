const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/todos.json');

function readTodos() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2));
}

module.exports = {
  readTodos,
  writeTodos
};
