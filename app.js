// === Chris Mannel - Interface - ToDo list project ===
// === Variables ===
var taskInput = document.getElementById("addItem"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incompleteTasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completedTasks"); //completed-tasks

// === Functions ===
//Add a new task
var addItem = function() {
  console.log("Add item...");
  //When the button is pressed

  //Create a new list item with the text from #new-task:

  //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
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

// === Wiring ===
//Set the click handler to the addTask function
addButton.onclick = addItem;
