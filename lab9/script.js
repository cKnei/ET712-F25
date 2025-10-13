let displayPexels = document.querySelector(".displaypexels");
window.addEventListener("scroll", function() {
    let yPixel = window.scrollY;
    displayPexels.innerHTML = `${yPixel}px from the top`;
});

const toTop = document.querySelector(".toTop");
window.addEventListener("scroll", function() {
    let yPixel = window.scrollY;
    if ( yPixel >= 600 ) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
});

window.addEventListener("resize", function() {
    displayPexels.style.backgroundColor = "crimson";
});

window.addEventListener("load", function() {
    this.alert("Page is loaded!");
});


const openModal1 = document.querySelector("#openmodal1");
const modalOverlay = document.querySelector("#modalOverlay");
const closeBtn = document.querySelector("#closeBtn");

openModal1.addEventListener("click", function() {
    modalOverlay.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});
