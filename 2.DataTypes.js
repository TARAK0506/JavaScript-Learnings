/* 

JavaScript Data Types

JavaScript is a dynamically typed language, meaning that variables can hold values of any type and can change types at runtime. This flexibility allows for rapid development but requires careful handling of data types to avoid errors.
JavaScript supports various data types, which can be broadly classified into two categories: primitive types and reference types (objects). Understanding these data types is crucial for effective programming in JavaScript.


JavaScript has several built-in data types, which can be categorized into two main groups: primitive and non-primitive (or reference) type
JavaScript has two main categories of data types:
1. Primitives
2. Objects (also known as Reference Type)
Primitives: Number, String, Boolean, Null, Undefined, Symbol
Objects: Arrays, Functions, Dates, Regular Expressions 

*/

// Primitive Data Types

let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // BigInt

// Displaying the data types
console.log("Number:", number, "Type:", typeof number);
console.log("String:", string, "Type:", typeof string);
console.log("Boolean:", boolean, "Type:", typeof boolean);
console.log("Null:", nullValue, "Type:", typeof nullValue);
console.log("Undefined:", undefinedValue, "Type:", typeof undefinedValue);
console.log("Symbol:", symbolValue, "Type:", typeof symbolValue);
console.log("BigInt:", bigIntValue, "Type:", typeof bigIntValue);

// Non-Primitive Data Types (Objects)
let array = [1, 2, 3, 4, 5]; // Array
let object = { name: "Alice", age: 30 }; // Object
let date = new Date(); // Date
let regex = /ab+c/; // Regular Expression
let functionExample = function() { return "Hello from a function!"; }; // Function

// Displaying the non-primitive data types
console.log("Array:", array, "Type:", typeof array);
console.log("Object:", object, "Type:", typeof object);
console.log("Date:", date, "Type:", typeof date);
console.log("Regular Expression:", regex, "Type:", typeof regex);
console.log("Function:", functionExample, "Type:", typeof functionExample);

