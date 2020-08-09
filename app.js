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
    text: 'Lift weights',
    completed: false
  }, {
    text: 'Buy oats',
    completed: true
  }];

  const incompleteTodos = todos.filter(function (todo) {
      return !todo.completed;
  })

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Adding new todo..');
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value);
})