/* Operators in JavaScript 
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Bitwise Operators
    6. Ternary Operator
    7. Typeof Operator
    8. Instanceof Operat2r34
*/


//Arithmetic Operators

let a = 10;
let b = 5;  
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus
console.log("Exponentiation:", a ** b); // Exponentiation
console.log("Post Increment:", a++); // Post Increment 
console.log("Post Decrement:", b--); // Post Decrement

console.log("Increment:", ++a); // Increment
console.log("Decrement:", --b); // Decrement

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("Assignment (+=):", x); // 15
x -= 3; // x = x - 3
console.log("Assignment (-=):", x); // 12
x *= 2; // x = x * 2
console.log("Assignment (*=):", x); // 24
x /= 4; // x = x / 4
console.log("Assignment (/=):", x); // 6
x %= 2; // x = x % 2
console.log("Assignment (%=):", x); // 0
x **= 3; // x = x ** 3
console.log("Assignment (**=):", x); // 0 (since 0 raised to any power is still 0)

// Comparison Operators
let y = 10;
let z = 20;
console.log("Equal (==):", y == z); // false
console.log("Strict Equal (===):", y === z); // false
console.log("Not Equal (!=):", y != z); // true
console.log("Strict Not Equal (!==):", y !== z); // true
console.log("Greater Than (>):", y > z); // false
console.log("Less Than (<):", y < z); // true
console.log("Greater Than or Equal (>=):", y >= z); // false
console.log("Less Than or Equal (<=):", y <= z); // true

// Logical Operators
let a1 = true;
let b1 = false;     
console.log("Logical AND (&&):", a1 && b1); // false
console.log("Logical OR (||):", a1 || b1); // true
console.log("Logical NOT (!):", !a1); // false

// Bitwise Operators
let c = 5; // 0101 in binary
let d = 3; // 0011 in binary
console.log("Bitwise AND (&):", c & d); // 1 (0001 in binary)
console.log("Bitwise OR (|):", c | d); // 7 (0111 in binary)
console.log("Bitwise XOR (^):", c ^ d); // 6 (0110 in binary)
console.log("Bitwise NOT (~):", ~c); // -6 (inverts all bits)
console.log("Left Shift (<<):", c << 1); // 10 (1010 in binary)
console.log("Right Shift (>>):", c >> 1); // 2 (0010 in binary)

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Ternary Operator:", canVote); // "Yes, you can vote."

// Typeof Operator
console.log("Typeof Operator:", typeof age); // "number"
console.log("Typeof Operator:", typeof "Hello"); // "string"
console.log("Typeof Operator:", typeof true); // "boolean"

// Instanceof Operator
class Person {
    constructor(name) {
        this.name = name;
    }
}
let person = new Person("John");
console.log("Instanceof Operator:", person instanceof Person); // true
console.log("Instanceof Operator:", person instanceof Object); // true
console.log("Instanceof Operator:", person instanceof Array); // false

