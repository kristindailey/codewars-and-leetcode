/* CHALLENGE DESCRIPTION

Write a function stringy that takes a size and returns a string of alternating 1s and 0s.

The string should start with a 1.

A string with size 6 should return'101010'.

With size 4 should return '1010'.

With size 12 should return '101010101010'.

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
    for (let i = 1; i <= size; i++) {
        result += i % 2;
    }
    return result;
}

console.log(stringy(6), "101010");
console.log(stringy(4), "1010");
console.log(stringy(12), "101010101010");

// OTHER SOLUTIONS
const stringy = size => "10".repeat(size).slice(0, size);

function stringy(size) {
    return Array(size).fill(1).map((el, i) => el = i % 2 ? 0 : 1).join('');
}