/*

Loops in JavaScript
Loops are used to execute a block of code repeatedly until a specified condition is met. JavaScript provides several types of loops:
1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop

*/

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}

// 3. do...while loop
let k = 0;
do {
    console.log("Do...While Loop Iteration:", k);
    k++;
}
while (k < 5);

// 4. for...in loop
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// 5. for...of loop
const arr = [10, 20, 30];
for (let value of arr) {
    console.log("Value:", value);
}
