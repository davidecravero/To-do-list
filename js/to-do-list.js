const debugOutput=true;
let addTodoButton = document.getElementById('addTodoButton');
let inputFlexContainer = document.getElementById('addTodo');
var parentTodoElement = document.getElementsByClassName('todos-tasks')[0];

/* wrapper for console.log to be able to globally enable/disable output */
let conLog = (msg) => {
  if (debugOutput) console.log (msg);
}

/* click handler for add buttons */
let addTask = (e) => {
  // conLog (`Add clicked... for ${e.target.parentNode.firstElementChild.className}`);

  // ##creative wrapper for each todo-item

  let todosTask = document.createElement('div');
  todosTask.className = 'todos-task'; //accessing the class from css
  parentTodoElement.appendChild(todosTask); //added item-div inside wrapper div

  // ##Input for todo list item

  let textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute("readonly", true);  //setting input as read only for later editing
  textInput.classList.add("todo-desc","todos-input-one"); //or li inside ul/ol
  textInput.value = inputFlexContainer.value; //value input connected to created input
  todosTask.appendChild(textInput); //appending the value to item-div


  // ##adding a checkbox input
  let checkboxInput = document.createElement('input');
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.classList.add ('checkboxInput');
  todosTask.appendChild(checkboxInput);


  // ##Adding the editIcon

  let editIcon = document.createElement('img');
  editIcon.classList = "edit-button";
  editIcon.src = "img/edit.svg";
  todosTask.appendChild(editIcon);

  // Adding the delete X icon

  let deleteIcon = document.createElement('img');
  deleteIcon.classList = "delete-button";
  deleteIcon.src = "img/x.svg";
  todosTask.appendChild(deleteIcon);


  inputFlexContainer.value = "";


}
let keyUp = (evt) => {
  if(evt.key === 'Enter' || evt.keyCode === 13) {
    addTask();
    inputFlexContainer.value = "";
  }
}

/* click handler for edit buttons */
let editTask = (evt) => {
  conLog (`Edit clicked... for ${evt.target.parentNode.className}`);
}

/* click handler for delete buttons */
let deleteTask = (evt) => {
  conLog (`Delete clicked... for ${evt.target.parentNode.className}`);
  let task = evt.target.parentNode.remove();
}

/* encapsulated function to add eventListening to elements
   (you can call it directly if you only assign it to one new element)
*/
let addEventByObj = (o,eventHandler, targetFunction) => {
  o.addEventListener(eventHandler,targetFunction);

}

/* assign event listener to elements by class */
let addEventsByClassname = (elementClassname,eventHandler,targetFunction) => {
   conLog(`Assigning ${eventHandler} to all elements (of class ${elementClassname})`);
   let targetElements = document.querySelectorAll('.' + elementClassname);
   conLog(`Found ${targetElements.length} elements.`)
   for (let i = 0; i < targetElements.length; i++){
		//targetElements[i].addEventListener(eventHandler,targetFunction);
    addEventByObj(targetElements[i],eventHandler,targetFunction)
	}
}

/* script initialization, called once on load */
let initializeTodolist = () => {
  conLog ("DOM loaded, initializing...");
  addEventsByClassname("add-button","click",addTask);
  addEventsByClassname("edit-button","click",editTask);
  addEventsByClassname("delete-button","click",deleteTask);

}

/* code should be executed after DOM is fully loaded */
document.addEventListener("DOMContentLoaded", initializeTodolist);










/*var editButtons = document.querySelectorAll("button.todo-edit");
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
*/

/*
	//create a list element



function createListElement() {
		var li = document.createElement("li");
}
//Strikethrough

function crossOut() {
	li.classList.toggle("done");
}

li.addEventListener("click",crossOut);

//delete list item:

function deleteListItem(){
	li.classList.add("delete")
}
//list after click

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

enterButton.addEventListener("click",addListAfterClick);
*/



var checkboxInput = document.getElementsByClassName('checkboxInput');
document.addEventListener('click', function(e){
if(event.target.matches ('.checkboxInput')) {
  if(e.target.checked === true){
    e.target.parentNode.firstElementChild.classList= "text-strike-through";
  } else {
    e.target.parentNode.firstElementChild.classList.remove("text-strike-through");
    e.target.parentNode.firstElementChild.classList = "todo-desc";
   }
 }

})


inputFlexContainer.addEventListener('keyup', keyUp);
