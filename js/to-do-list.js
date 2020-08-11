const debugOutput=true;

/* wrapper for console.log to be able to globally enable/disable output */
let conLog = (msg) => {
  if (debugOutput) console.log (msg);
}

/* click handler for add buttons */
let addTask = (evt) => {
  conLog (`Add clicked... for ${evt.target.parentNode.firstElementChild.className}`);
} 

/* click handler for edit buttons */
let editTask = (evt) => {
  conLog (`Edit clicked... for ${evt.target.parentNode.className}`);
}

/* click handler for delete buttons */
let deleteTask = (evt) => {
  conLog (`Delete clicked... for ${evt.target.parentNode.className}`);
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