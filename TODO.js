// ToDo List in JavaScript

let todoList = {
  tasks: [],

  addTask: function(taskText) {
    this.tasks.push({
      text: taskText,
      completed: false
    });
    this.displayTasks();
  },

  completeTask: function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      this.displayTasks();
    } else {
      console.log("Invalid task index.");
    }
  },

  deleteTask: function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
      this.displayTasks();
    } else {
      console.log("Invalid task index.");
    }
  },

  displayTasks: function() {
    console.log("--- ToDo List ---");
    if (this.tasks.length === 0) {
      console.log("No tasks.");
    } else {
      this.tasks.forEach(function(task, index) {
        let status = task.completed ? "[x]" : "[ ]";
        console.log(index + ". " + status + " " + task.text);
      });
    }
    console.log("------------------");
  }
};

// Example usage:
todoList.addTask("Buy groceries");
todoList.addTask("Finish homework");
todoList.addTask("Call a friend");

todoList.completeTask(0); // Mark "Buy groceries" as completed
todoList.displayTasks();

todoList.deleteTask(2); //remove "Call a friend"
todoList.displayTasks();

//Example with HTML.
//HTML:
//<input type="text" id="taskInput">
//<button onclick="addTaskFromInput()">Add Task</button>
//<ul id="taskList"></ul>

//Javascript:

let todoListHTML = {
    tasks: [],
    addTask: function(taskText){
        this.tasks.push({text: taskText, completed: false});
        this.displayTasks();
    },
    completeTask: function(index){
        this.tasks[index].completed = true;
        this.displayTasks();
    },
    deleteTask: function(index){
        this.tasks.splice(index,1);
        this.displayTasks();
    },
    displayTasks: function(){
        let taskListElement = document.getElementById("taskList");
        taskListElement.innerHTML = ""; //Clear the list
        this.tasks.forEach(function(task, index){
            let listItem = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", function(){
                todoListHTML.completeTask(index);
            });
            let taskText = document.createTextNode(task.text);
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function(){
                todoListHTML.deleteTask(index);
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
            taskListElement.appendChild(listItem);
        });
    }
}

function addTaskFromInput(){
    let input = document.getElementById("taskInput");
    let taskText = input.value;
    if(taskText.trim() !== ""){
        todoListHTML.addTask(taskText);
        input.value = ""; //clear input
    }
}