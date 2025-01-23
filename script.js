function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task === '') {
    alert("Please enter a task!");
    return;
  }
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function() {
    li.classList.toggle("completed");
  };
  
  var label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(task));
  
  li.appendChild(label);
  
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.className = "delete";
  deleteButton.onclick = function() {
    ul.removeChild(li);
  };
  
  li.appendChild(deleteButton);
  
  ul.appendChild(li);
  input.value = "";
  document.getElementById("addTaskButton").disabled = true; // Disable button after adding task
}

document.getElementById("taskInput").addEventListener("input", function() {
  var input = document.getElementById("taskInput");
  var addButton = document.getElementById("addTaskButton");
  addButton.disabled = input.value.trim() === ''; // Disable button if input is empty or only whitespace
});
