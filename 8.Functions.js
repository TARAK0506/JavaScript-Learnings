/*

- Functions in JavaScript are blocks of code designed to perform a particular task.
- They are executed when "called" or "invoked".

- Functions can take parameters and return values.

*/

// Named Function & Declaration

function sum(a,b,c){
    return a + b + c;
}
sum(1,2,3); // 6
console.log(sum(1,2,3)); // 6

// Function Expressions (Named & Anonymous)
// Named Function Expression
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // 20


// Anonymous Function Expression
const divide = function(a, b) {
    return a / b;
}
console.log(divide(10, 2)); // 5
// Function Declarations vs Function Expressions
// Function Declaration
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5)); // 5
// Function Expression
const add = function(a, b) {
    return a + b;
}
console.log(add(3, 7)); // 10



// Arrow Functions

const hello = () =>{
    console.log("Hello World");
}
hello(); // Hello World

// Arrow functions can also take parameters
const greet = (name) => {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Hello, Alice!

const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 10)); // 15

// Arrow functions can be concise
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

// Arrow functions can also return objects
const createUser = (name, age) => ({ name, age });
const user = createUser("Bob", 30);
console.log(user); // { name: 'Bob', age: 30 }


// Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log("This is an IIFE");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Charlie"); // Hello, Charlie!
