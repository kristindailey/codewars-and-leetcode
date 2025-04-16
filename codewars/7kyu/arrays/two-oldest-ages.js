/* CHALLENGE DESCRIPTION

The two oldest ages function needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least two items. If there are two or more oldest ages, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

/* PREP
Parameters
    // array of numbers
    // array will always include at least two elements
    // order of elements can be in any order
Returns 
    // return two highest numbers in the array
    // return value should be an array 
    // format return array as [second oldest age, oldest age]
Examples 
    // [2, 7, 3, 9]
        // [7, 9]
    //  [15, 20, 100, 3]
        // [20, 100]
Pseudocode 
    // function that takes in one parameter, an array
    // sort the array from smallest to largest
    // return the second to last element in the sorted array
    // return the last element in the sorted array
*/

// MY SOLUTIONS
function twoOldestAges(ages) {
    let sorted = ages.sort((a, b) => a - b);
    return [sorted[sorted.length - 2], sorted[sorted.length - 1]];
}

console.log(twoOldestAges([2, 7, 3, 9]), [7, 9]);
console.log(twoOldestAges([15, 20, 100, 3]), [20, 100]);
console.log(twoOldestAges([50, 100, 100]), [100, 100]);

// OTHER SOLUTIONS
const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2);

function twoOldestAges(ages) {
    let s = ages.sort((a, b) => b - a);
    return [s[1], s[0]];
}