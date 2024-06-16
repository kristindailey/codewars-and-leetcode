/* CHALLENGE DESCRIPTION

Define a function that removes duplicates from an array of non-negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

// MY SOLUTION
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 1, 2]), [1, 2]);
console.log(removeDuplicates([1, 2, 1, 1, 3, 2]), [1, 2, 3]);
console.log(removeDuplicates([2, 2, 3, 3, 4, 4, 1]), [2, 3, 4, 1]);

// OTHER SOLUTION
const removeDupes = a => Array.from(new Set(a));