/**
 * Knei | Homework 04
 */

const username_field = document.querySelector("#username");
const username_error = document.querySelector("#username_error");

const email_field = document.querySelector("#email");
const email_error = document.querySelector("#email_error");

const password_field = document.querySelector("#password");
const password_error = document.querySelector("#password_error");

const submit_button = document.querySelector("#submit");

function username_field_validate() {
    username_field.classList.remove("invalid_input", "valid_input");

    let trimmed_username = username_field.value.trim();

    if (trimmed_username === "") {
        username_field.classList.add("invalid_input");
        username_error.textContent = "Please enter your name";
    } else {
        username_field.classList.add("valid_input");
        username_error.textContent = "";
    }
}

// Sourced from https://emailregex.com/index.html under the Javascript section. For simplicity we are not using RFC 5322
const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function email_field_validate() {
    email_field.classList.remove("invalid_input", "valid_input");

    let trimmed_email = email_field.value.trim();

    if (trimmed_email === "" || !EMAIL_RE.test(trimmed_email)) {
        email_field.classList.add("invalid_input");
        email_error.textContent = "Please enter a valid email";
    } else {
        email_field.classList.add("valid_input");
        email_error.textContent = "";
    }
}

const PASSWORD_RE = /[#\$%]/;
function password_field_validate() {
    password_field.classList.remove("invalid_input", "valid_input");

    let password_value = password_field.value;

    if (password_value === "") {
        password_field.classList.add("invalid_input");
        password_error.textContent = "Please enter your password";
    } else if (password_value.length < 5) {
        password_field.classList.add("invalid_input");
        password_error.textContent = "Password must be 5+ characters";
    } else if (!PASSWORD_RE.test(password_value)) {
        password_field.classList.add("invalid_input");
        password_error.textContent = "Password must contain at least one of the following: #, $, %";
    } else {
        password_field.classList.add("valid_input");
        password_error.textContent = "";
    }
}

function can_submit() {
    submit_button.disabled = !(document.querySelectorAll(".valid_input").length === 3);
}

username_field.addEventListener("input", function (event) {
    event.preventDefault();

    username_field_validate();

    can_submit();
});

email_field.addEventListener("input", function (event) {
    event.preventDefault();

    email_field_validate();

    can_submit();
});

password_field.addEventListener("input", function (event) {
    event.preventDefault();

    password_field_validate();

    can_submit();
});


// Part 2

let index = 0;

function scrollToIndex(idx) {
    const viewport = document.querySelector('.viewport');

    viewport.scrollTo({ left: ( viewport.scrollWidth / 2 ) * idx, behavior: 'smooth' });
}

document.querySelector('#right')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index);
    });

document.querySelector('#left')
    .addEventListener('click', function () {
        index = (index + 1) % 2;
        scrollToIndex(index);
    });