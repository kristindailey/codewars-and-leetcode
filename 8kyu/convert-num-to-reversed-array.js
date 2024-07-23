/* CHALLENGE DESCRIPTION

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// MY SOLUTION
function digitize(n) {
    let myArr = String(n).split("").map((n) => Number(n));
    return myArr.reverse();
}

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