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

// OTHER SOLUTION
const maps = arr => arr.map(x => x * 2);