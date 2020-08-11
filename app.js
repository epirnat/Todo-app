const todos = [{
    text: 'Return videotapes',
    completed: false
  }, {
    text: 'Do laundry',
    completed: true
  }, {
    text: 'Study for exams',
    completed: false
  }, {
    text: 'Finish this app',
    completed: false
  }, {
    text: 'Buy oats',
    completed: true
  }];

const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  const incompleteTodos = filteredTodos.filter (function (todo) {
    return !todo.completed;
  })
  
  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);
  
  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
})