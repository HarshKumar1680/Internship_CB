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

function moveUpById(id) {
  axios.post('/moveup', { id })
    .then(() => fetchTodos())
    .catch(err => {
      console.error('Error moving up:', err.response?.data || err.message);
    });
}

function moveDownById(id) {
  axios.post('/movedown', { id })
    .then(() => fetchTodos())
    .catch(err => {
      console.error('Error moving down:', err.response?.data || err.message);
    });
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<li class="empty">No tasks available</li>';
    return;
  }

  todos.forEach((todo, index) => {
    const isFirst = index === 0;
    const isLast = index === todos.length - 1;

    const li = document.createElement('li');
    li.innerHTML = `
      <span style="flex-grow:1;">${todo.name}</span>
      <div style="display:flex; gap:5px;">
        <button onclick="moveUpById('${todo.id}')" class="${isFirst ? 'hide-up' : ''}">⬆️</button>
        <button onclick="moveDownById('${todo.id}')" class="${isLast ? 'hide-down' : ''}">⬇️</button>
        <button class="delete" onclick="deleteTodoById('${todo.id}')">X</button>
      </div>
    `;
    list.appendChild(li);
  });
}
