/* CHALLENGE DESCRIPTION

Given an array of integers, your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2], your solution should return 2.
Given [34, -345, -1, 100], your solution should return -345.

You can assume for the purpose of this kata that the supplied array will not be empty.
*/

// MY SOLUTION
function findSmallestInt(arr) {
    let min = Math.min(...arr);
    return min;
}

console.log(findSmallestInt([34, 15, 88, 2]), 2);
console.log(findSmallestInt([34, -345, -1, 100]), -345);
console.log(findSmallestInt([0, 50, -50]), -50);

// OTHER SOLUTIONS
const findSmallestInt = arr => Math.min(...arr);

const findSmallestInteger = arr => arr.sort((a, b) => a - b)[0];