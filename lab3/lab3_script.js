/**
 * Knei
 * Lab 3 | Loops
 * Thursday, September 4th, 2025
 */

console.log('Example 1 | For loop as a counter');

for ( let x = 0; x <= 5; x++ ) {
    console.log(x);
}

console.log('Example 2 | For loop with conditional statement');

for ( let x = -20; x <= 20; x++ ) {
     if ( x % 2 == 0)
        console.log(x);
}

console.log('Example 3 | For loop as a decrement operator');

for ( let x = 3; x >= 0; x-- ) {
    console.log(x);
}

console.log("Example 4 | For loop in Array");

let cars = ['Mazda', 'BMW', 'Honda', 'Toyota', 'Tesla', 'Jeep'];
console.log('Index based Loop');
for ( let index = 0; index < cars.length; index++ ) {
    console.log(cars[index]);
}
// or
console.log('Advanced for loop');
for ( let car of cars ) {
    console.log(car);
}

console.log('Example 5 | Appaliction using for loops');

let carCounter = 0;
for ( let i = 0; i < cars.length; i++ ) {
    if ( cars[i].length > 4 ) 
        carCounter++;
}
console.log(`There are is/are ${carCounter} car(s) with 4 or more letters in their name`);

console.log('Example 6 | Application using for loops (cont\'d)');
/**
 * Sorry about this one, I got kind of side tracked...
 */
console.log('Lets play a guessing game!');
console.log('You get 3 tries!');

const TRIES = 3
const HIDDEN = 5;
for ( let count = 0; count < TRIES; count++ ) {
    let guess = parseInt(prompt("Guess a number between 1-9") ?? '');
    
    if ( isNaN(guess) ) {
        console.log('Hey that was not a Number!');
        console.log('Try again, you did not lose a try');
        count--;
        continue;
    }
    
    console.log(`You guessed ${guess}`);
    if ( guess === HIDDEN ) {
        console.log(`Great! You guessed the number!`);
        break;
    }
    
    if ( guess > HIDDEN )
        console.log('Sorry try again. Your guess was too large!');
    else if ( guess < HIDDEN )
        console.log('Sorry try again. Your guess was too small!');

    if ( count === TRIES ) 
        console.log('Good tries, better luck next time!');
    else
        console.log(`You have ${TRIES-count} tries/try left!`);
}

console.log('Example 7 | While loop as a counter');

let y = 0;
while ( y < 5 ) {
    console.log(y);
    y++;
}

console.log('Example 8 | Validate an input');

let input = parseInt(prompt('Enter a number between 1-9') ?? '');
while ( isNaN(input) || input < 1 || input > 9 ) {
    input = parseInt(prompt('That is not a number between 1-9\nPlease enter a number between 1-9') ?? '');
}
console.log(`The collected number is ${input}`);

console.log('Example 9 | Simulate a bank transaction');
/**
 * Sorry I used some of my own knowledge here
 */
let AccountBalance = 1000;
program: while (true) { // label used for later
    const option = parseInt(prompt('How can I help you today?\n1 - Check Account Balance\n2 - Deposit\n3 - Withdraw\nAny Other Number - Exit') ?? '');

    switch ( option ) {
        case 1:
            console.log(`Your balance is $${AccountBalance}`);
            break;
        case 2:
            let deposit = parseFloat(prompt(`How much are you depositing?`) ?? '');
            if ( isNaN(deposit) || deposit <= 0 ) {
                console.log('Error: Invalid Amount');
            } else {
                AccountBalance += deposit;
                console.log(`Deposited $${deposit}`);
                console.log(`Your new balance is $${AccountBalance}`);
            }
            break;
        case 3:
            let withdraw = parseFloat(prompt('How much would you like to withdraw?') ?? '');
            if ( isNaN(withdraw) || withdraw > AccountBalance || withdraw < 0 ) {
                console.log('Error: Invalid Amount');
            } else {
                AccountBalance -= withdraw;
                console.log(`Withdrew $${withdraw}`);
                console.log(`Your new balance is $${AccountBalance}`);
            }
            break;
        default:
            console.log('Thank you for banking with us');
            break program; // Break with label, as breaking inside the switch block only applies to the switch.
    }

    /**
     * if ( option <= 0 || option > 3) {
     *     console.log('Thank you for banking with us');
     *     break;
     * }
     */
}

console.log('Exercise a');

const nums = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -2];

let posSum = 0;
let negSum = 0;

for ( let num of nums ) {
    if ( num > 0 ) {
        posSum += num;
    } else if ( num < 0 ) {
        negSum += num;
    }
} 
console.log(`Sum of all positive numbers = ${posSum}`);
console.log(`Sum of all negative numbers = ${negSum}`);


console.log('Exercise b');

const PIN = '9090';
let attempts = 0;

while (true) {
    const input = prompt('Enter PIN');

    if ( input === PIN ) { 
        console.log('Welcome User');
        break;
    } else if ( attempts >= 3 ) {
        console.log('Too many attempts! Your account is locked');
    } else {
        console.log('PIN doesn\'t match');
        attempts++;
    }
}


