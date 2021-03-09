window.onload = function() {
    const todoList = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    
    button.onClick = function() {
        let myTask = input.value;
        input.value = '';

        const listTodo = document.createElement('li');
        const listText = document.createElement('span');
        const listButton = document.createElement('button');
    
        listTodo.appendChild(listText);
        listText.textContent = myTask;
        listTodo.appendChild(listButton);
        listButton.textContent = 'Delete';
        listButton.style.marginLeft = '10px';
        todoList.appendChild(listTodo);
    
        listButton.onclick = function(e) {
            todoList.removeChild(listTodo);
        }
    
        input.focus();
    }
}
