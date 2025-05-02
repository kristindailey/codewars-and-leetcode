/* CHALLENGE DESCRIPTION

Given a random non-negative number, return the digits of the number within an array in reverse order.

Example (Input => Output):
35231 => [1, 3, 2, 5, 3]
0 => [0]
*/

// function that takes in a num, non-negative
// return digits of the num in an array in reverse order

// MY SOLUTION
function digitize(n) {
    let myArr = String(n).split("").map((n) => Number(n));
    return myArr.reverse();
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);

// OTHER SOLUTIONS
function digitize(n) {
    return String(n).split("").map(Number).reverse();
}

function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}

const digitize = n => n.toString().split("").reverse().map(Number);