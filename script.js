document.addEventListener('DOMContentLoaded', () => {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Step 4: Task Creation and Removal
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li) for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners
    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
