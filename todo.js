document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todoInput');
    //boslugu silir
    const task = todoInput.value.trim();
    //qiymet null deylse bu metodu cagrir
    if (task) {
        addTaskToUI(task);
        todoInput.value = '';
    }
});

// Function to add task to the UI
function addTaskToUI(task) {
    
    const todoList = document.getElementById('todoList');
    //siyahiya li elementini elave edrik
    const li = document.createElement('li');
    li.textContent = task; 

    const actions = document.createElement('div');
    actions.classList.add('todo-actions');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.onclick = function () {
        const newTask = prompt('Edit task:', task);
        if (newTask !== null) {
            li.firstChild.textContent = newTask.trim();
        }
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function () {
        todoList.removeChild(li);
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(actions);
    todoList.appendChild(li);
}
