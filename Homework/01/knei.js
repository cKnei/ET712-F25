/**
 * Homework 1 | Control Flow and Loops
 * Student Name | Knei
 */

console.log('Program 1 | Conditional Statement');
let data = prompt('Enter data');

if ( data === null ) {
	console.log('Null and void!');
} else if ( data === '' ) {
	console.log('Your answer was blank!');
} else {
	let potNum = parseFloat(data);
	if ( potNum === 0 ) {
		console.log('Yin and Yang!');
	} else if ( potNum > 0 ) {
		console.log('Think Positively');
	} else if ( potNum < 0 ) {
		console.log('Never have negative balance');
	}
}


console.log('Program 2 | for loop and nested conditional statement');
let nums = []
while ( nums.length < 10 ) {
	let uin = parseFloat(prompt('Enter a number'));

	if ( isNaN(uin) ) {
	} else {
		nums.push(uin);
	}
}

let mult3 = 0;
let mult5 = 0;
let mult7 = 0;

for ( let num of nums ) {
	console.log(num);
	if ( num % 3 === 0 ) {
		mult3 += 1;
	}
	if ( num % 5 === 0 ) {
		mult5 += 1;
	}
	if ( num % 7 === 0 ) {
		mult7 += 1;
	}
}

console.log(`${mult3} numbers are multiple of 3`);
console.log(`${mult5} numbers are multiple of 5`);
console.log(`${mult7} numbers are multiple of 7`);
