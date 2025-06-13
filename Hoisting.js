/*
    Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
    However, only the declarations are hoisted, not the initializations. This can lead to some unexpected behavior if not understood properly.

    1. Variable declarations are hoisted, but their initializations are not.
    2. Function declarations are hoisted completely, meaning you can call them before they are defined in the code.
    3. Function expressions (including arrow functions) are not hoisted in the same way as function declarations.
    4. Variables declared with `let` and `const` are also hoisted but are not initialized, leading to a "Temporal Dead Zone" until they are defined.
    5. Hoisting can lead to confusion, especially with variable shadowing and the use of `var` vs `let`/`const`.
    6. Best practices suggest declaring variables at the top of their scope to avoid confusion.
        - Arrow functions do not have their own `this` context; they inherit `this` from the enclosing lexical context.
        - This means that `this` inside an arrow function will refer to the `this` value of the surrounding code, not the object that called the function.

        - This can be useful for maintaining the context in callbacks or methods that are passed around.
*/


// Example of hoisting with variables

console.log(a); // undefined
var a = 5; // Variable declaration is hoisted, but initialization is not
console.log(a); // 5

// Example of hoisting with function declarations

console.log(greet); // [Function: greet] - Function declaration is hoisted
console.log(greet()); // "Hello, World!" - Function declaration is hoisted
function greet() {
    console.log("Hello, World!");
}

// Example of hoisting with function expressions

console.log(sayHello); // undefined - Function expression is not hoisted
var sayHello = function() {
    console.log("Hello, Function Expression!");
};

// Example of hoisting with let and const
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10; // let declaration is hoisted but not initialized
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20; // const declaration is hoisted but not initialized

// Example of hoisting with arrow functions
console.log(sayHi); // undefined - Arrow function expression is not hoisted
var sayHi = () => {
    console.log("Hi, Arrow Function!");
};

