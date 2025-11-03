/**
 * Knei | Project 1
 */

/**
 * ========================================
 * CONSTANT VARIABLE DECLARATION
 * ========================================
 */
const SECTION = {
    clothing:   document.getElementById("clothing"),
    colours:    document.getElementById("colours"),
    numbers:    document.getElementById("numbers"),
    shapes:     document.getElementById("shapes"),
}

const SECTION_TEXT = {
    clothing: "Click on a piece of clothing to learn more!",
    colours: "Click a colour to see its name shown in that colour!",
    numbers: "Click on a number to see an example!",
    shapes: "Click on a shape to see its name!"
}

const NUMBER_EXAMPLE = [
"\u{1F3B2}", // 🎲
"\u{1F335}", // 🌵
"\u{1F984}", // 🦄
"\u{1F355}", // 🍕
"\u{1F680}", // 🚀
"\u{1F308}", // 🌈
"\u{1F419}", // 🐙
"\u{1F3A7}", // 🎧
"\u{1F525}", // 🔥
"\u{1F369}", // 🍩
"\u{1F436}", // 🐶
"\u{1F431}", // 🐱
"\u{1F430}", // 🐰
"\u{1F42E}", // 🐮
"\u{1F434}", // 🐴
"\u{1F98B}", // 🦋
"\u{1F40D}", // 🐍
"\u{1F577}", // 🕷️
"\u{1F98A}", // 🦊
"\u{1F47B}", // 👻
"\u{1F4A1}", // 💡
"\u{1F4BB}", // 💻
"\u{1F4BE}", // 💾
"\u{1F4B0}", // 💰
"\u{1F381}", // 🎁
"\u{1F389}", // 🎉
"\u{1F947}", // 🥇
"\u{1F3C3}", // 🏃"
"\u{1F3D4}", // 🏔️
];

const NAVIGATION_OPTIONS = document.querySelectorAll(".navigation_option");
const SECTION_TEXT_ = document.querySelector(".section_text");
const RESPONSE_TEXT = document.querySelector(".response");

let index = 0;
let previousShape = "circle";

/**
 * ========================================
 * FUNCTION DECLARATION
 * ========================================
 */
function toggleSection(section) {
    for ( let s in SECTION )
        SECTION[s].style.display = "none";

    RESPONSE_TEXT.textContent = "";
    RESPONSE_TEXT.style.color = ""
    SECTION[section].style.display = "flex";
    SECTION_TEXT_.textContent = SECTION_TEXT[section];
    index = 0;

    scrollToIndex(0, "#svp");
    scrollToIndex(0, "#cvp");

}

function scrollToIndex(idx, sel) {
    const viewport = document.querySelector(sel);

    viewport.scrollTo({ left: ( viewport.scrollWidth / 2 ) * idx, behavior: 'smooth' });
}

function setResponseText(text) {
    RESPONSE_TEXT.textContent = text[0].toUpperCase() + text.slice(1);
}

/**
 * ========================================
 * PAGE INITIALIZATION
 * ========================================
 */
for ( let navigation_option of NAVIGATION_OPTIONS ) {
    navigation_option.addEventListener("click", function(event) {
        event.preventDefault();

        for ( let n of NAVIGATION_OPTIONS )
            n.classList.remove("navigation_selected");

        navigation_option.classList.add("navigation_selected");

        toggleSection(navigation_option.textContent.toLowerCase());
    });
}

toggleSection("colours");

for ( let colour of document.querySelectorAll(".colour") ) {
    colour.addEventListener("click", function() {
        RESPONSE_TEXT.style.color = colour.classList[2];
        setResponseText(colour.classList[2]);
    });
}

for ( let shape of document.querySelectorAll(".shape") ) {
    shape.addEventListener("click", function() {
        // Well I wanted to make it show the previous selected shape... but we haven't learned about modifying direct html :p
        previousShape = shape.classList[2];
        setResponseText(shape.classList[2]);
    });
}

for ( let number of document.querySelectorAll(".text") ) {
    number.addEventListener("click", function() {
        let selectedEmoji = NUMBER_EXAMPLE[Math.floor(Math.random() * NUMBER_EXAMPLE.length)];
        let exampleString = "";
        console.log(selectedEmoji);
        for ( let i = 0; i < Number.parseInt(number.textContent); i++ ) 
            exampleString += selectedEmoji;

        setResponseText(exampleString);
    });
}

document.querySelector('#sright')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index, "#svp");
    });

document.querySelector('#sleft')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index, "#svp");
    });

    document.querySelector('#cright')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index, "#cvp");
    });

document.querySelector('#cleft')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index, "#cvp");
    });



// This is just for modals (Yeah I did all of them cause why not)

/**
<section class="modal_overlay" id="sharedModal" style="display:none">
    <div class="modal">
        <span class="close_btn" id="sharedClose">&times;</span>
        <h2 class="modal_title" id="sharedTitle"></h2>
        <div class="modal_info">
            <img src="" class="modal_img" id="sharedImg">
            <p class="modal_p" id="sharedP"></p>
        </div>
    </div>
</section>
 */

const SHARED_MODAL = document.getElementById("sharedModal");
const SHARED_CLOSE = document.getElementById("sharedClose");
const SHARED_TITLE = document.getElementById("sharedTitle");
const SHARED_IMAGE = document.getElementById("sharedImg");
const SHARED_P     = document.getElementById("sharedP");


for ( let cloth of document.querySelectorAll(".cloth") ) {
    cloth.addEventListener("click", function() {
        let id = cloth.id;
        console.log(id);
        SHARED_TITLE.textContent = document.getElementById(`${id}-h5`).textContent;
        SHARED_P.textContent = document.getElementById(`${id}-p`).textContent;
        SHARED_IMAGE.src = `imgs/placeholder.svg`;
        SHARED_MODAL.style.display = "block";
    })
}

SHARED_CLOSE.addEventListener('click', function() {
    SHARED_MODAL.style.display = 'none';
});

SHARED_MODAL.addEventListener('click', function(event) {
    if (event.target === SHARED_MODAL)
        SHARED_MODAL.style.display = 'none';
});