let todos = [];

// Load tasks from localStorage on page load
window.onload = function () {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    renderTodos();
  }
};

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;

  todos.push({ text: task, completed: false });
  input.value = '';
  saveAndRender();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveAndRender();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      <span onclick="toggleTodo(${index})" style="flex-grow:1;cursor:pointer">${todo.text}</span>
      <button class="delete" onclick="deleteTodo(${index})">X</button>
    `;
    list.appendChild(li);
  });
}
