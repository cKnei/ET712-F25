let displayPexels = document.querySelector(".displaypexels");
window.addEventListener("scroll", function() {
    let yPixel = window.scrollY;
    displayPexels.innerHTML = `${yPixel}px from the top`;
});

const toTop = document.querySelector(".toTop");

window.addEventListener("resize", function() {
    displayPexels.style.backgroundColor = "crimson";
});

window.addEventListener("load", function() {
    this.alert("Page is loaded!");
});


const openModal1 = document.querySelector("#openmodal1");
const openModal2 = document.querySelector("#openmodal2");
const openModal3 = document.querySelector("#openmodal3");
const modalOverlay1 = document.querySelector("#modalOverlay1");
const modalOverlay2 = document.querySelector("#modalOverlay2");
const modalOverlay3 = document.querySelector("#modalOverlay3");
const closeBtn1 = document.querySelector("#closeBtn1");
const closeBtn2 = document.querySelector("#closeBtn2");
const closeBtn3 = document.querySelector("#closeBtn3");

openModal1.addEventListener("click", function() {
    modalOverlay1.style.display = "block";
});

closeBtn1.addEventListener("click", function() {
    modalOverlay1.style.display = "none";
});

openModal2.addEventListener("click", function() {
    modalOverlay2.style.display = "block";
});

closeBtn2.addEventListener("click", function() {
    modalOverlay2.style.display = "none";
});

openModal3.addEventListener("click", function() {
    modalOverlay3.style.display = "block";
});

closeBtn3.addEventListener("click", function() {
    modalOverlay3.style.display = "none";
});

//Exercise
const sheader = document.querySelector(".sheader");

let prevY = 0;
window.addEventListener("scroll", function() {
    let yPixel = window.scrollY; 
    console.log(yPixel, prevY)
    if ( yPixel > prevY ) {
        sheader.style.backgroundColor = "pink";
    } else {
        sheader.style.backgroundColor = "cyan";
    }
    prevY = yPixel;
});

window.addEventListener("resize", function() {
    let width = window.innerWidth;
    
    if ( width > 1000 ) {
        sheader.style.color = "red";
    } else if ( width > 700 ) {
        sheader.style.color = "green";
    } else if ( width > 300 ) {
        sheader.style.color = "blue";
    }
});