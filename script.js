// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();
        
        const taskText = taskInput.value;

        if (taskText === '') return;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.addEventListener('click', deleteTask);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';
    }

    function deleteTask(e) {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
});
