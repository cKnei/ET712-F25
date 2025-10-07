/**
 * Knei
 * Lab 8 | Events
 * Oct 7th, 2025
 */
console.log("Knei");

let btnpressme = document.querySelector(".btnpressme");
btnpressme.addEventListener("click", function(event) {
    if ( event.target.textContent === "PRESS ME!" ) {
        event.target.textContent = "Button Was Pressed!";
    } else {
        event.target.textContent = "PRESS ME AGAIN!";
    }

    event.target.classList.toggle("btnactive");
});

let list = document.querySelector("#list");
list.addEventListener("click", function(event) {
    if ( event.target.tagName.toLowerCase() === "li" ) {
        event.target.remove();
    }
});

const qcclink = document.querySelector(".qcclink");
qcclink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("QCC Website is under maintainance");
});

let btnscrollby = document.querySelector(".btnscrollby");
let content = document.querySelector("#content");
btnscrollby.addEventListener("click", function(_) {
    window.scrollBy(200, 0);
});

/* Photo Gallery */
const btnright = document.querySelector(".btnright");
const btnleft = document.querySelector(".btnleft");

function scrollGallery(pixels) {
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth",
    });
}

btnright.addEventListener("click", function() {
    scrollGallery(500);
});
btnleft.addEventListener("click", function() {
    scrollGallery(-500);
});
