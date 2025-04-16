/* CHALLENGE DESCRIPTION

Given a non-empty array of integers, return the result of multiplying the values together in order. 

Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// MY SOLUTION
const returnTheProduct = arr => arr.reduce((a, b) => a * b, 1);

console.log(returnTheProduct([1, 2, 3, 4]), 24);
console.log(returnTheProduct([5, 5, 5]), 125);
console.log(returnTheProduct([1, 1, 1, 2]), 2);

// OTHER SOLUTIONS
function grow(x) {
    return x.reduce((a, b) => a * b, 1);
}

const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
};