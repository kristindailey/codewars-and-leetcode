/* CHALLENGE DESCRIPTION

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/* PREP
Parameters
    // array of integers
    // two-dimensional -- array of arrays
Returns 
    // return one single array sorted in ascending order
    // array uses all the elements from the array of arrays
Examples 
    // [[], [1, 5, 4, 3], [9, 2]]
        // [1, 2, 3, 4, 5, 9]
    //  [[10, 30, 2], [1, 9, 5], [2, 0]]
        // [0, 1, 2, 2, 5, 9, 10, 30]
Pseudocode 
    // function that takes in one parameter, array of integers
    // merge all the arrays into one array
    // sort the array in ascending order
    // return the sorted array
*/

// MY SOLUTION
const flattenAndSort = array => array.flat().sort((a, b) => a - b);

console.log(flattenAndSort([[], [1, 5, 4, 3], [9, 2]]), [1, 2, 3, 4, 5, 9]);
console.log(flattenAndSort([[10, 30, 2], [1, 9, 5], [2, 0]]), [0, 1, 2, 2, 5, 9, 10, 30]);

// OTHER SOLUTION
const flatAndSort = array => [].concat(...array).sort((a, b) => a - b);