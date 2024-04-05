/* CHALLENGE DESCRIPTION

Implement a function which converts the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/ 

// MY SOLUTION
function booleanToString(b) {
    return b.toString();
}

console.log(booleanToString(true), "true");
console.log(booleanToString(false), "false");

// OTHER SOLUTIONS
function booleanToString(b) {
    return String(b);
}

function booleanToString(b) {
    return b ? "true" : "false";
}

const booleanToString = b => b.toString();