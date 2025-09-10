/**
 * Knei
 * Lab 4 | Functions
 * September 9th, 2025
 */

console.log('Knei');

function printMessage() {
    console.log('Example 1');
    console.log('Hello this message is from the inside of the printMessage function');
}


function countdown() {
    console.log('Example 2');
    for ( let i = 3; i > 0; i-- ) {
        console.log(i);
    }
}


function greeting(userName) {
    console.log('Example 3');
    console.log(`Hello ${userName}!`);
}


function upperMessage(message) {
    console.log('Example 4');
    let changeToUpper = message.toUpperCase();
    console.log(changeToUpper);
}

function isSnakeEyes(dice1, dice2) {
    console.log('Example 5');
    if ( dice1 === 1 && dice2 === 1 ) {
        console.log('Snake Eyes');
    } else {
        console.log('Not Snake Eyes');
    }
}


function areaRectangle(length, width) {
    console.log('Example 6');
    return length * width;
}


function checkTemperature(temperature) {
    if ( temperature >= 75 ) {
        return true;
    } else {
        return false;
    }
}


console.log('Lab Exercise');

function checkName() {
    let potentialName = prompt('Enter your name');
    while (true) {
        if ( potentialName == null || potentialName === '' ) {
            potentialName = prompt('You forgot to enter a name. Enter a name again');
            continue;
        }

        let parsedNumber = parseFloat(potentialName);
        if ( !isNaN(parsedNumber) && `${parsedNumber}` !== potentialName ) {
            potentialName = prompt(`${potentialName} is invalid! Enter a name again`);
            continue;
        }

        break;
    }

    console.log(`Welcome ${potentialName.toUppperCase()} to the class!`);
}

