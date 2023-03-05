var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var del = document.querySelectorAll(".finish");

function inputLength() {
	return input.value.length;
}


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

	var b = document.createElement("button");
	b.appendChild(document.createTextNode("Delete"));
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

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.code === "Enter" ) {
		createListElement();
		}
}


del.forEach(function(item) {
	item.addEventListener("click",function() {
		item.parentElement.remove();
	})
})

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

items.forEach(function(item) {
	item.addEventListener("click", function() {
		item.classList.toggle("done");
	})
})


