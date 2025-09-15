/**
 * Knei
 * Lab 5 | More Functions and Introduction to Objects
 * September 11th, 2025
 */

console.log('Knei');

// Example 1 | Different looking functions
// Anonymous Function
let greet = function (username) {
    console.log(`Welcome to function ${username}`);
}
// Arrow Function
let greeting = (username) => {
    console.log(`Good afternoon ${username}`);
}

// Example 2 | Default Parameters
function randNumber(x = 1) {
    for ( let i = 0; i < x; i++ ) {
        let num = Math.ceil(Math.random() * 9);
        console.log(num);
    }
}

// Example 3 | Spread Syntax ...
let numbers = [2, 0, -10, 5, 8, -9];
let maxNumber = Math.max(numbers);
console.log('\nExample 3 | Spread Operator');
console.log(`The maximum number is: ${maxNumber}`);

// Example 4
const car = {
    type: 'Fiat',
    model: '500',
    colour: 'white',

    carDescription: function () {
        return `Car type = ${this.type}, ${this.model}, Car colour = ${this.colour}`;
    }
}

// Example 5 
const math = {
    perimeter: function (width = 0, length = 0) {
        return 2 * (width + length);
    },
    area: function (width = 0, length = 0) {
        return width * length;
    },
}

// Example 6
const cat = {
    name: 'Mickey',
    colour: 'Black coat with White Spots',
    breed: 'unknown',

    meow: () => { console.log('Meoew Meow Meow') },
}

// Example 7
const hen = {
    name: 'Helen',
    eggCount: 0,

    layAnEgg() { 
        this.eggCount++;
        return `${this.name} laid an egg`;
    },

    resetEggCount() {
        this.eggCount = 0;
        return `${this.name}'s eggCount has been reset to ${this.eggCount}`;
    },
}


// Example 8
function yell(message = "") {
    try {
        console.log(message.toUpperCase().repeat(3));
    } catch (err) {
        console.log(err);
        console.log('Please pass in a string');
    }
}


// Exercise 1
const myCalculator = {
    message: 'hello',
    side: 2,

    area_square() {
        return Math.pow(this.side, 2);
    },
    volume_cubed() {
        return Math.pow(this.side, 3);
    },
}


// Exercise 2
function readProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (err) {
        console.log('Error accessing property');
    }
}
