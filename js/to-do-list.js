var editButtons = document.querySelectorAll("button.todo-edit");
var editTodoTask = function() {
	if (this.parentNode.firstElementChild.className==="todo-desc"){
		alert("Making editable: "+this.parentNode.firstElementChild)
			this.parentNode.firstElementChild.classList.toggle("todo-edit-active");
	}
}
console.log("l:"+(editButtons.length));

for (var i=0; i<editButtons.length; i++){
		editButtons[i].onclick = editTodoTask;
	}

