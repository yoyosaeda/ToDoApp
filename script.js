function addTodo() {
  let input = document.getElementById("todoInput");

  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.onclick = function () {
    if (checkbox.checked) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
  };

  let text = document.createTextNode(" " + input.value);

  li.appendChild(checkbox);
  li.appendChild(text);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
