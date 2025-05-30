// Switch Case Statements in JavaScript

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
        return "Sunday";
        case 1:
        return "Monday";
        case 2:
        return "Tuesday";
        case 3:
        return "Wednesday";
        case 4:
        return "Thursday";
        case 5:
        return "Friday";
        case 6:
        return "Saturday";
        default:
        return "Invalid day number";
    }
}
console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(6)); // Output: Saturday