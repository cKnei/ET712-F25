/**
 * Knei
 * Homework 2 | Functions, Loops, and Conditional Statements
 */

function name_counting(names) {
    let lessThan5Characters = 0;

    for ( let i = 0; i < names.length; i++ ) {
        if ( names[i].length < 5 ) {
            lessThan5Characters++;
        }
    }
    
    return lessThan5Characters;
}

console.log(```
============================================
Before anything I would like to say, the Exercise is badly worded,
But this is what my interpretation of it is. So if it is wrong, 
I am sorry ahead of time. -Knei
============================================
```);
let names = ['Ann', 'Peter', 'Patricia', 'Sam', 'Katerina'];
console.log(names_counting(names));


function checkNum() {
    let input = parseInt(prompt("Please enter a number"));

    while (true) {
        if ( !isNaN(input)) ) break;

        input = parseInt(prompt("Please enter a valid number"));
    }

    return ( input % 2 === 0 );
}
