/* CHALLENGE DESCRIPTION

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

/* PREP
Parameters
    // array of integers
Returns 
    // return even integers in order of original array 
Examples 
    // [2, 5, 4, 9]
        // [2, 4]
    //  [5, 15, 20, 45, 40, 0]
        // [20, 40, 0]
Pseudocode 
    // function that takes in an array
    // filter the array for elements that are even
    // if even, return the element
    // return array of even elements
*/

// MY SOLUTION
const noOdds = values => values.filter(element => element % 2 === 0);

// OTHER SOLUTIONS
function noOdds(values) {
    let result = [];
    for (let i = 0; i <= values.length; i++) {
        if (values[i] % 2 === 0) result.push(values[i]);
    }
    return result;
}

const noOddElements = values => values.filter(element => !(element % 2));