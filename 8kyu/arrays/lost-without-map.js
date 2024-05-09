/* CHALLENGE DESCRIPTION

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

// MY SOLUTION
function maps(x) {
    let newArr = x.map(y => y * 2);
    return newArr;
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([0, 1, 2]), [0, 2, 4]);
console.log(maps([5, 10, 20]), [10, 20, 40]);

// OTHER SOLUTION
const maps = arr => arr.map(x => x * 2);