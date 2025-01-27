document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' prevents duplicate saving
    }

    // Add a new task to the list and optionally save to Local Storage
    function addTask(taskText, save = true) {
        const trimmedTaskText = taskText.trim(); // Ensure trimmed value is used
        if (trimmedTaskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = trimmedTaskText;

        // Add a class for styling
        listItem.classList.add('task-item');

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

        // Add a class for styling
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to remove the task
        removeButton.onclick = () => removeTask(trimmedTaskText, listItem);

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Save the task to Local Storage (if save is true)
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(trimmedTaskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field
        taskInput.value = "";
    }

    // Remove a task from the list and update Local Storage
    function removeTask(taskText, listItem) {
        // Remove the task element from the DOM
        taskList.removeChild(listItem);

        // Remove the task from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter((task) => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach Event Listeners
    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim()); // Use trimmed input value
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim()); // Use trimmed input value
        }
    });

    // Load tasks on page load
    loadTasks();
});
