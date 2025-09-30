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

// Seotember 30th, 2025
// Event Handling
let btnPress = document.querySelector(".btn_press");
btnPress.onclick = function() {
    alert(`${new Date()}`);
};

// Mouse Events
let x = document.querySelector(".x");
let circleParagraph = document.querySelector(".circle_paragraph");
x.onmouseover = function() {
    circleParagraph.textContent += "- Circle -";
};

let boxColour = document.querySelector(".boxColour");
let randRGB = function() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};
boxColour.addEventListener("mouseout", function() {
    boxColour.style.backgroundColor = randRGB();
};

// Key Events
let textInput = document.querySelector(".text_input");
let usernameParagraph = document.querySelector(".username_paragraph");
textInput.addEventListener("keydown", function() {
    usernameParagraph.textContent = "Username MUST have 3+ characters";
};

// Lab Exercise
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
let ps1 = document.querySelector(".ps1");
ps1.addEventListener("mouseout", function() {
    ps1.textContent = "Knei";
});

// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
let ps2 = document.querySelector(".ps2");
ps2.addEventListener("onclick", function() {
    ps2.style.fontSize = "25px";
    ps2.style.color = "olive";
});

// search for the first div with class divs2
// add a click event to change the background color to indigo
let divs2 = document.querySelector(".divs2");
divs2.addEventListener("onclick", function() {
    divs2.style.backgroundColor = "indigo";
});

// search for the second div with class divs2
// add a keydown event to change the width of divs2 to 300px
let divs3 = document.querySelector(".divs3");
divs3.addEventListener("keydown", function() {
    divs2.style.width = "300px";
});
