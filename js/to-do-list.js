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

	//create a list element



function createListElement() {
		var li = document.createElement("li");

//Strikethrough

function crossOut() {
	li.classList.toggle("done");
}

li.addEventListener("click",crossOut);

//delete list item:

function deleteListItem(){
	li.classList.add("delete")

//list after click

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

enterButton.addEventListener("click",addListAfterClick);
