document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add_button');
    const inputTask = document.querySelector('.input_tsk');
    const tasksContainer = document.querySelector('.tasks');

    addButton.addEventListener('click', () => {
        const taskText = inputTask.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task_item');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete_button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tasksContainer.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            tasksContainer.appendChild(taskItem);

            inputTask.value = '';
        }
    });
});
