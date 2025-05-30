/*

Strings in JavaScript
Strings are used to represent text data in JavaScript. They can be defined using single quotes, double quotes, or backticks (template literals).
Strings can be concatenated, sliced, and manipulated in various ways.
Strings are immutable, meaning once created, they cannot be changed. However, you can create new strings based on existing ones.


*/

let a = "Hello World";
let b = 'Hello World';
let c = `Hello World`;
let d = `Hello ${a}`;

let e = `Hello ${a} ${b}`;
let f = `Hello ${a} ${b} ${c}`;
let g = `Hello ${a} ${b} ${c} ${d}`;
let h = `Hello ${a} ${b} ${c} ${d} ${e}`;


/*

String Methods
Strings have many built-in methods that allow you to manipulate and work with text data. Here are some commonly used string methods:
1. length - Returns the length of the string.
2. toUpperCase() - Converts the string to uppercase.
3. toLowerCase() - Converts the string to lowercase.
4. charAt(index) - Returns the character at the specified index.
5. indexOf(substring) - Returns the index of the first occurrence of the specified substring, or -1 if not found.
6. lastIndexOf(substring) - Returns the index of the last occurrence of the specified substring, or -1 if not found.
7. slice(start, end) - Returns a new string that is a substring of the original string, starting from the specified start index and ending at the specified end index.
8. substring(start, end) - Returns a new string that is a substring of the original string, starting from the specified start index and ending at the specified end index.
9. replace(searchValue, newValue) - Returns a new string with the first occurrence of the specified search value replaced by the new value.
10. split(separator) - Splits the string into an array of substrings based on the specified separator.
11. trim() - Removes whitespace from both ends of the string.
12. includes(substring) - Returns true if the string contains the specified substring, otherwise false.

*/