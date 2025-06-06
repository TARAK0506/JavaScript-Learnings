/* This keyword in JavaScript

    1. this keyword in global space.
    2. this keyword inside a function.
    3. this keyword in non-strict mode (this substitution happens mostly).
    4. this keyword value depends on how the function is being called (window).
    5. this keyword inside the object's method.
    6. this keyword inside an arrow function.
    7. this keyword inside an nested arrow function.
    8. this keyword inside the DOM Elements.
*/
// "use strict";

// 1. this keyword in global space.
console.log(this);

// 2. this keyword inside a function.
    // - in non-strict mode this value is window object.
function x(){
    console.log(this);
}
x();

// 3. this keyword in non-strict mode (this substitution happens mostly).
    // - The original value of this keyword is undefined or null if this happens

    //  - in strict mode this value is undefined..
function x(){
    console.log(this);
}
x();


// 4. this keyword value depends on how the function is being called (window).
window.x();

// 5. this keyword inside the object's method.

const obj = {
    name : "Taraka Ramarao",
    fun : function(){
        console.log(this);    // output will be an object this reference
        console.log(this.name);
    },
};

obj.fun();


// call, apply, bind methods (sharing methods)

const obj2 = {
    name : "Heysiri",
};

obj.fun.call(obj2);


// 6. this keyword inside an arrow function 
    // enclosing lexical context
// their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.
const arr = {
    name : "Taraka Ramarao",
    fun : () => {
        console.log(this);    
        console.log(this.name);
    },
};
arr.fun();


// 7. this keyword inside an nested arrow function

const object = {
    a : 10,
    x : function(){
        y = () => {
            console.log(this);
        };
        y();
    },
};

object.x();


// this keyword inside the DOM Elements
//  => reference to the HTML Element (this.TagName)


