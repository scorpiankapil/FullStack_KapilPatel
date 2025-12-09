function addTodo() {
  let input = document.getElementById("todoInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

 

  let li = document.createElement("li");


  let textNode = document.createElement("span");
  textNode.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

 
  li.appendChild(textNode);
  li.appendChild(deleteBtn);

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
