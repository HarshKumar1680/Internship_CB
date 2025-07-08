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

  // Send JSON instead of URL-encoded string
  axios.post('/addtodo', { name: task })
    .then(() => {
      input.value = '';
      fetchTodos(); // Reload the list
    })
    .catch(err => {
      console.error('Error adding todo:', err.response?.data || err.message);
    });
}

function deleteTodoById(id) {
  // Send JSON instead of URL-encoded string
  axios.post('/deletetodo', { id })
    .then(() => {
      fetchTodos(); // Reload list after deletion
    })
    .catch(err => {
      console.error('Error deleting todo:', err.response?.data || err.message);
    });
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<li class="empty">No tasks available</li>';
    return;
  }

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = '';
    li.innerHTML = `
      <span style="flex-grow:1;">${todo.name}</span>
      <button class="delete" onclick="deleteTodoById('${todo.id}')">X</button>
    `;
    list.appendChild(li);
  });
}
