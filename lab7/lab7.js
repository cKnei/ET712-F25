/**
 * Knei
 * Lab 7 | Introduction to the Document Object Model
 */

console.log("Knei");

// Access(Select) element by Id Name
let titleNode = document.querySelector("#title");
console.log(titleNode);

// Access(Select) element by Class Name
let description = document.querySelector(".description");
console.log(description);

// Access(Select) element by Tag Name
let heading1 = document.querySelector("h1"); // This only selects the first `h1` tag
console.log(h1);

// Access(Select) all elements with Class Name
let allDescription = document.querySelectorAll(".description");
console.log(allDescription);

console.log("Loop through eachelementin list");
for ( let i = 0; i < allDescription.length; i++ ) {
    console.log(allDescription[i].textContent);
}

let shapeDiv = document.querySelector(".shapeDiv");

document.querySelector(".btn_square").addEventListener("click", function() {
    shapeDiv.className = "square";
    shapeDiv.textContent = "SQUARE;
    shapeDiv.style.backgroundColor = "gold";
    shapeDiv.style.fontSize = "3rem";
});

document.querySelector(".btn_circle").addEventListener("click", function() {
    shapeDiv.className = "circle";
    shapeDiv.textContent = "CIRCLE";
    shapeDiv.style.backgroundColor = "hotpink";
    shapeDiv.style.fontSize = "1rem";
});

document.querySelector(".btn_rectangle").addEventListener("click", function() {
    shapeDiv.className = "rectganle";
    shapeDiv.textContent = "RECTANGLE";
    shapeDiv.style.backgroundColor = "gray";
    shapeDiv.style.fontSize = "2rem";
});
