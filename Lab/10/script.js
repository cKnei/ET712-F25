/**
 * Knei | Lab 
 * Thursday, October 16th, 2025
 */
console.log("Knei");

let form = document.querySelector("#form1");
let greeting = document.querySelector(".greeting");
let displayUsername = document.querySelector(".display_username");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let usernameInput = document.querySelector("#username");
    let username = usernameInput.value;

    if ( username.trim() === "" ) {
        alert("Please Enter A Username");
        return;
    }

    greeting.style.display = "block";
    displayUsername.textContent = username;

    usernameInput.value = "";
    
    form.submit();
});

let submitButton = document.querySelector(".btnsubmit");

window.addEventListener("load", function() {
    submitButton.disabled = true;
});

let usernameInput = document.querySelector(".form_input");

usernameInput.addEventListener("input", function(event) {
    let usernameValue = usernameInput.value;
    let inputLength = usernameValue.length;
    let error = document.querySelector(".username_error_message");

    if ( inputLength >= 2 && inputLength <= 20 ) {
        error.style.display = "none";
        submitButton.disabled = false;
        usernameInput.classList.remove("active_input_invalid");
        usernameInput.classList.add("active_input_valid");
    } else {
        submitButton.disabled = true;
        error.style.display = "block";
        usernameInput.classList.remove("active_input_valid");
        usernameInput.classList.add("active_input_invalid");
    }
});

/**
 * Tuesday, Oct 21, 2025
 */
const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("focus", function () {
    passwordInput.classList.remove("active_input_invalid");
    passwordInput.classList.add("active_input_valid");
});

passwordInput.addEventListener("blur", function () {
    passwordInput.classList.remove("active_input_valid");
    passwordInput.classList.add("active_input_invalid");
});


const originalWord = "javascript";

function shuffleWord(word) {
    return word.split("").sort(function () { Math.random() - 0.5 }).join();
}

document.querySelector("#display_shuffled_word").textContent = shuffleWord(originalWord);

const guessInput = document.querySelector("#guess_input");
const wordFeedback = document.querySelector("#word_feedback");

guessInput.addEventListener("input", function () {
    const guess = guessInput.value.trim().toLowerCase();

    if ( guess === originalWord ) {
        wordFeedback.textContent = "Correct!";
        guessInput.classList.remove("active_input_invalid");
        guessInput.classList.add("active_input_valid");
    } else {
        wordFeedback.textContent = "Incorrect";
        guessInput.classList.remove("active_input_valid");
        guessInput.classList.add("active_input_invalid");
    };
});
