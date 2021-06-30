var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//New Variables
var li = ul.getElementsByTagName("li");
var deleteButtons = ul.getElementsByClassName("delete");
var deleteLength = li.length;


//Existing code
function inputLength() {
	return input.value.length;
}

//Add with extra functionality
function removeNodes(event) {
	var node = event.target;
	var parent = node.parentElement;
	node.removeEventListener("click", removeNodes);
	node.previousSibling.remove();
	node.remove();
	deleteLength--;
	if (deleteLength === 0) {
		parent.remove();
	}
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.classList.add("delete");
	button.textContent = "Delete";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.appendChild(button);
	button.addEventListener("click", removeNodes);
	deleteLength++;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Toggling Done
function toggledone(event) {
	if (!(event.target.classList.contains("delete"))) {
		event.target.classList.toggle("done");
	}
}

//Deleting elements via buttons
for (var i = 0; i < deleteLength; i++) {
	deleteButtons[i].addEventListener("click", removeNodes);
}





