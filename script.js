//global variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll(".check");
var li = document.querySelectorAll("li");
var del = document.querySelectorAll(".finish");

function inputLength() {
	return input.value.length;
}

//creates the todo by adding a div, list item and the buttons as well as the listeners required for the buttons to work
function createListElement() {
	var div = document.createElement("div");
	div.classList.add("item");
	ul.appendChild(div);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("task");
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	div.appendChild(li);

	var c = document.createElement("button");
	c.appendChild(document.createTextNode("✓"));
	c.classList.add("check");
	c.addEventListener("click", function() {
        c.previousElementSibling.classList.toggle("done");
    })

	div.appendChild(c);

	var b = document.createElement("button");
	b.appendChild(document.createTextNode("X"));
	b.classList.add("finish");
	b.addEventListener("click", function() {
        div.remove();
    })

	div.appendChild(b);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//add todo by pressing enter instead of click
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.code === "Enter" ) {
		createListElement();
		}
}

//clears the todos
function cleanup() {
	document.getElementById("todos").innerHTML = ' ';
}

//deletes a to do
del.forEach(function(item) {
	item.addEventListener("click",function() {
		item.parentElement.remove();
	})
})

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


items.forEach(function(item) {
	item.addEventListener("click", function() {
		item.previousElementSibling.classList.toggle("done");
	})
})



