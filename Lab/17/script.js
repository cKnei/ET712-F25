console.log("Lab 17 | Node JS | Knei");
console.log("Example 1: console");
console.warn("Warning! Read last code before proceeding");
console.error("Error, port is not available!");
console.trace("TRACE LOCATION");

setTimeout(()=>{
    console.warn("Warning! input string for next step");
}, 3000);

console.log("Example 2: Creating a simple module");
const name = require("./mod");

console.log(name("Peter"));
