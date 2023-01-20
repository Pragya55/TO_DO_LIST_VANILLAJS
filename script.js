

var todoList = document.getElementById("todo-list");
var addButton = document.getElementById("add-button");
var taskCount = document.getElementById("task-count");
var completedCount = document.getElementById("completed-count");
var remainingCount = document.getElementById("remaining-count");

addButton.addEventListener("click", addTask);

function addTask() {
  var task = document.getElementById("task").value;
  var listItem = document.createElement("li");
  listItem.innerHTML = "<span>" + task + "</span>" + 
                      "<button class='delete-button'>X</button>"+
                      "<button class='complete-button'>Complete</button>";
  todoList.appendChild(listItem);
  document.getElementById("task").value = "";

  var deleteButtons = document.getElementsByClassName("delete-button");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteTask);
  }
  
  var completeButtons = document.getElementsByClassName("complete-button");
  for (var i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", completeTask);
  }
  updateTaskCount();
}

function deleteTask(event) {
  var buttonClicked = event.target;
  var listItem = buttonClicked.parentNode;
  todoList.removeChild(listItem);
  updateTaskCount();
}

// function completeTask(event) {
//   var buttonClicked = event.target;
//   var listItem = buttonClicked.parentNode;
//   listItem.classList.add("completed");
//   updateTaskCount();
// }

function completeTask(event) {
  var buttonClicked = event.target;
  var listItem = buttonClicked.parentNode;
  listItem.classList.add("completed");
  var taskSpan = listItem.querySelector("span");
     
  taskSpan.style.textDecoration = "line-through";
  taskSpan.style.color = "#ccc";
  buttonClicked.style.display = "none";
  updateTaskCount();
}

function updateTaskCount() {
  taskCount.innerHTML = todoList.children.length;
  completedCount.innerHTML = document.querySelectorAll("#todo-list .completed").length;
  remainingCount.innerHTML = todoList.children.length - completedCount.innerHTML;
}