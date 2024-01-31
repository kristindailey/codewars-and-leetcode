/* CHALLENGE DESCRIPTION

Write a function that takes a size and returns a string of alternating 1s and 0s.

The string should start with a 1.

Examples:
6 -> "101010"
4 -> "1010"
12 -> "101010101010"

The size will always be positive and will only use whole numbers.
*/

// function that takes on param, size (integer), only whole nums, always positive
// return str of that size with alternating 1s and 0s, str starts with 1

// MY SOLUTION
function stringy(size) {
    // declare result var
    // for loop - start with 1
    // add i % 2 to result
    // return result
    let result = "";
    for (let i = 0; i < size; i++) {
        result += i % 2 === 0 ? "1" : "0";
    }
    return result;
}

console.log(stringy(6), "101010");
console.log(stringy(4), "1010");
console.log(stringy(12), "101010101010");

// OTHER SOLUTIONS
const stringy = size => "10".repeat(size).slice(0, size);

function stringy(size) {
    return Array(size).fill(0).map((_, i) => i % 2 === 0 ? "1" : "0").join("");
}