const todoList = document.querySelector('ul');

const newTodo = document.createElement('li');
newTodo.textContent = 'New Todo';

todoList.appendChild(newTodo);

allTodos = document.querySelectorAll('li');
allTodos.forEach(todo => {
    console.log('todo', todo);

    todo.addEventListener('click', (e) => {
        console.log('event', e);
        const modifiedTodo = document.createElement('li');
        modifiedTodo.textContent = 'updated todo';

        todoList.replaceChild(modifiedTodo, )
    })
})

function handleClick() {

}