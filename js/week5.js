window.onload = function() {
    const todoList = document.querySelector('ul');
    const input = document.querySelector('input');
    const addButton = document.querySelector('button');
  
    addButton.onclick = function() {
      const listTodo = document.createElement('li');
      const listText = document.createElement('span');
      const listButton = document.createElement('button');
  
      listTodo.appendChild(listText);
      listTodo.classList.add('magic-list');
      listText.textContent = input.value;
      listButton.textContent = 'Delete';
      listButton.classList.add('delete-button');
      listTodo.appendChild(listButton);
      todoList.appendChild(listTodo);
  
      listButton.onclick = function(e) {
        todoList.removeChild(listTodo);
      }
    }
  }
