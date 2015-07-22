// === Chris Mannel - Interface - ToDo list project ===
// === Variables ===
var taskInput = document.getElementById("addItem"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incompleteTasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completedTasks"); //completed-tasks

// === Functions ===

//Create a new task element by building it with JS. This will be called later with the addItem function which is triggered by the button press
var createNewTaskElement = function (taskString) {
    //creating list item using createElement method and assigning 'string' to element name
    var listItem = document.createElement("li");
    //create input (checkbox)
    var checkBox = document.createElement("input");
    //create label element
    var label = document.createElement("label");
    //create input (text)
    var editInput = document.createElement("input"); //text
    //create button.edit
    var editButton = document.createElement("button");
    //create button.delete
    var deleteButton = document.createElement("button");

  //once these elements are created they need to be modified to match the template created for the project

  checkBox.type = "checkbox"; //adds checkbox type to element
  editInput.type = "text";
  editInput.className = "inputStyle"; //adds class for Bootstrap styling
  editButton.innerText = "Edit";
  editButton.className = "edit btn btn-sm btn-primary";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete btn btn-sm btn-danger";
  //assigns innerText to 'taskString' value passed to this function
  label.innerText = taskString;

  //each element then needs appended to listItem element
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addItem = function() {
  console.log("Add item...");
  //When the button is pressed

  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement("Some New Task");

  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}
//This links all elements to there methods above and runs when a for loop starts below
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

// === Wiring ===
//Set the click handler to the addTask function
//addButton.onclick = addItem;

//var ajaxRequest = function() {
//  console.log("AJAX request");
//}

//Set the click handler to the addTask function
addButton.addEventListener("click", addItem);

//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
