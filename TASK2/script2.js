const taskList = document.getElementById('task-list');
const addButton = document.getElementById('add-button');
const newTaskInput = document.getElementById('new-task');

let tasks = [];


function addTask(task) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
    tasks = tasks.filter(t => t !== task); 
  });
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  tasks.push(task); 
  newTaskInput.value = ''; 
}


addButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim(); 
  if (newTask) {
    addTask(newTask);
  }
});


const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
  tasks.forEach(task => addTask(task));
}


window.addEventListener('beforeunload', function() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
