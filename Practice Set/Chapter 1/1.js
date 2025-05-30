// Q1
let a = "Taraka Rama Rao ";
let b = 25;

console.log(a + b);


// Q2

console.log(typeof (a + b)); // This will show the type of the result of a + b


// Q3

const obj = {
    name : "Taraka Rama Rao",
    age : 25,
    isStudent : true,
    address : {
        city : "Srikakulam",
        state : "Andhra Pradesh"
    }
}

obj = 23; // This will throw an error because obj is a constant and cannot be reassigned
console.log(obj);

// Q4

obj["country"] = "India"; // This is allowed because we are modifying the properties of the object, not reassigning it
console.log(obj);

// Modifying the properties of an object is allowed even if the object is declared with const, as long as you are not reassigning the entire object.
obj.age = 26; // This is allowed
console.log(obj);

// Q5 
const dict = {
    "Student" : "A person who is studying",
    "Teacher" : "A person who teaches",
    "School" : "An institution for educating children",
    "College" : "An institution for higher education",
    "University" : "An institution of higher learning providing facilities for teaching and research",
}
console.log(dict["Student"]); // Accessing the value of the key "Student"
console.log(dict.School);   





