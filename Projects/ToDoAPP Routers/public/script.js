let todos = [];

window.onload = function () {
  fetchTodos();
};

function fetchTodos() {
  axios.get('/gettodo')
    .then(res => {
      todos = res.data;
      renderTodos();
    })
    .catch(err => {
      console.error('Error fetching todos:', err);
    });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value;
  if (!task) return;

  axios.post('/addtodo', { name: task })
    .then(() => {
      input.value = '';
      fetchTodos(); // refresh
    })
    .catch(err => {
      console.error('Error adding todo:', err.response?.data || err.message);
    });
}

function deleteTodoById(id) {
  axios.post('/deletetodo', { id })
    .then(() => {
      fetchTodos(); // refresh
    })
    .catch(err => {
      console.error('Error deleting todo:', err.response?.data || err.message);
    });
}

// 🆕 Move task up in the list
function moveUp(index) {
  if (index <= 0) return; // already at top
  [todos[index - 1], todos[index]] = [todos[index], todos[index - 1]];
  renderTodos();
}

// 🆕 Move task down in the list
function moveDown(index) {
  if (index >= todos.length - 1) return; // already at bottom
  [todos[index + 1], todos[index]] = [todos[index], todos[index + 1]];
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<li class="empty">No tasks available</li>';
    return;
  }

  todos.forEach((todo, index) => {
    const li = document.createElement('li');

    const isFirst = index === 0;
    const isLast = index === todos.length - 1;

    li.innerHTML = `
      <span style="flex-grow:1;">${todo.name}</span>
      <div style="display:flex; gap:5px;">
        <button onclick="moveUp(${index})" class="${isFirst ? 'hide-up' : ''}">⬆️</button>
        <button onclick="moveDown(${index})" class="${isLast ? 'hide-down' : ''}">⬇️</button>
        <button class="delete" onclick="deleteTodoById('${todo.id}')">X</button>
      </div>
    `;

    list.appendChild(li);
  });
}
