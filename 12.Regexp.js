/*

JavaScript Regex :
    - Regex stands for regular expressions. Regex is a powerful tool that allows you to define search patterns.

    - In JavaScript, regular expressions are incredibly useful for various tasks such as data validations, search and replace text, and data parsing.
    
    - write regular expressions and to match, search, and manipulate strings.
*/


/* 
    1.JavaScript Regex Basics 
        The basic Javascript Regex including related regular expression methods, character classes, anchors, and word boundaries.

*/

// Creating a Regular Expression
let regExp1 = /hi/;

let regexp = new RegExp('hi');

// Email Validation Regex


const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const pattern = /^[a-zA-Z0-9.%_+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;


console.log(emailRegExp.test('tarakaramarao0506@gmail.com')); // true
console.log(emailRegExp.test('tarakaramarao0506@gmail')); // false
console.log(emailRegExp.test('tarakaramarao0506@gmailcom')); // false
console.log(emailRegExp.test('tarakaramarao0506@gmail.')); // false
console.log(emailRegExp.test('tarakaramarao0506@gmail.c')); 
console.log(emailRegExp.test('tarakaramarao0506@gmail.c.rcdr'));
