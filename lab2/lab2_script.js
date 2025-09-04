console.log("lab 2 by Knei");
console.log("\nExample 1: Arrays");

let fruits = ["apple", "orange", "grape", "kiwi", "pineapple"];
console.log(`The third fruit = ${fruits[2]}`);
console.log(`There is/are ${fruits.length} fruit/s in the list`);
console.log(`Original Array: ${fruits}`);
fruits.shift();
console.log(`Array.shift: ${fruits}`);
fruits.unshift(25, "mango", true);
console.log(`Array.unshift: ${fruits}`);
fruits.push("PETER", 100);
console.log(`Array.push: ${fruits}`);

let index_blueberry = fruits.indexOf("blueberry");
console.log(`Array.indexOf, value not present: ${index_blueberry}`);

let index_PETER = fruits.indexOf("PETER");
console.log(`Array.indexOf, value present: ${index_PETER}`);


console.log("\nExample 2: if expressions");

let day = true;
let night = false;

if ( day /* or you can use day == true */) {
    console.log("Good morning");
}
console.log("END 1");

let n1 = 10;
let n2 = "10";

if ( n1 == n2 ) {
    console.log(`n1 is loosely equal to n2 | ${n1 == n2}`);
}
console.log("END 2");

if ( n1 === n2 ) {
    console.log(`n1 is strictly equal to n2 | ${n1 === n2}`);
}
console.log("END 3");

console.log("\nExample 4: Even or Odd Numbers");

let num = 10;
if ( num % 2 === 0 ) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}

console.log("\nExample 5: Check if User Input is a String or Number");

let username_in = prompt("Enter a username");
let check_username = isNaN(parseFloat(user_in)); // Using float as it will also parse plain Int(s)
console.log(`Is ${username_in} a Number? ${check_username}`);
if ( check_username ) {
    console.log(`${username_in} is a String`);
} else {
    console.log(`${username-in} is a Number`);
}

console.log("\n Example 6: Multi Conditional if Expression");

n1 = 9;
n2 = "9";

if ( n1 === n2 ) {
    console.log("n1 is Strictly equal to n2");
} else if ( n1 > n2 ) {
    console.log("n1 is greater than n2");
} else if ( n1 < n2 ) {
    console.log("n1 is less than n2");
} else {
    console.log("Error: Unable to Compare values");
}

console.log("\n Example 7: Switch-Case");

let gender = "F";

switch ( gender ) {
    case "F":
        console.log("Selected (F)emale");
        break;
    case "M":
        console.log("Selected (M)ale");
        break;
    case "O": 
        console.log("Selected (O)ther");
        break;
    default:
        console.log("Error: Unable to match input");
        break;
        
}


console.log("\nExercise 1");

let uinput = prompt("Enter a number");
let finput = parseFloat(uinput);

if ( isNaN(uinput) ) {
    console.log(`${uinput} is a string`);
} else if ( finput > 0 ) {
    console.log(`${finput} is Positive`);
} else if ( finput < 0 ) {
    console.log(`${finput} is Negative`);
} else if ( finput === 0 ) {
    console.log(`${finput} is Zero`);
} else {
    console.log("Error: Unexpected Input");
}

console.log("\nExercise 2");

let colours = ["red", "green", "orange", "pink", "magenta"];
let selected_colour = prompt("Enter the first letter of the colour you want to select").toLowerCase();

switch ( selected_colour ) {
    case "r":
        console.log("You selected: Red");
        break;
    case "g":
        console.log("You selected: Green");
        break;
    case "o":
        console.log("You selected: Orange");
        break;
    case "p":
        console.log("You selected: Pink");
        break;
    case "m":
        console.log("You selected: Magenta");
        break;
    default:
        console.log("That colour is not on the list!");
}
