// Type Conversions in JavaScript
// Type conversions in JavaScript can be explicit or implicit.
// Explicit conversions are done using functions like String(), Number(), and Boolean().
// Implicit conversions are done automatically by JavaScript when necessary, such as when using the + operator with a string and a number.

// Example of explicit type conversion
let num = 42;
let str = String(num); // Converts number to string
let bool = Boolean(num); // Converts number to boolean
console.log(str); // "42"
console.log(bool); // true

// Example of implicit type conversion
let implicitStr = "The answer is " + num; // Implicitly converts number to string
console.log(implicitStr); // "The answer is 42"
// Example of implicit type conversion with addition
let implicitSum = "5" + 10; // Implicitly converts number to string
console.log(implicitSum); // "510" (string concatenation)
// Example of implicit type conversion with subtraction
let implicitSubtraction = "10" - 5; // Implicitly converts string to number
console.log(implicitSubtraction); // 5 (number subtraction)
// Example of implicit type conversion with comparison
let implicitComparison = "5" == 5; // Implicitly converts string to number for comparison
console.log(implicitComparison); // true (both are treated as numbers)
// Example of implicit type conversion with boolean         
let implicitBoolean = "0"; // Non-empty string is truthy
console.log(Boolean(implicitBoolean)); // true (non-empty string is truthy)
// Example of implicit type conversion with null and undefined
let implicitNull = null; // null is falsy
console.log(Boolean(implicitNull)); // false (null is falsy)
let implicitUndefined; // undefined is falsy
console.log(Boolean(implicitUndefined)); // false (undefined is falsy)
// Example of implicit type conversion with arrays
let implicitArray = [1, 2, 3]; // Array is truthy
console.log(Boolean(implicitArray)); // true (non-empty array is truthy)
// Example of implicit type conversion with objects
let implicitObject = { key: "value" }; // Object is truthy
console.log(Boolean(implicitObject)); // true (non-empty object is truthy)
// Example of implicit type conversion with NaN
let implicitNaN = NaN; // NaN is falsy
console.log(Boolean(implicitNaN)); // false (NaN is falsy)
// Example of implicit type conversion with Infinity
let implicitInfinity = Infinity; // Infinity is truthy
console.log(Boolean(implicitInfinity)); // true (Infinity is truthy)

