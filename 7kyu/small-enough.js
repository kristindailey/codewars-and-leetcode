/* CHALLENGE DESCRIPTION

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

/* PREP
Parameters
    // array of numbers, limit value
Returns 
    // return true or false
Examples
    // smallEnough([5, 6, 7, 8], 4)
        // false
    // smallEnough([1, 2, 3, 4], 4)
        // true
Pseudocode 
    // function that takes in array and limit value
    // check that each element <= limit value
    // if so, return true
    // if not, return false
*/

// MY SOLUTION
const smallEnough = (a, limit) => a.every(element => element <= limit);

// OTHER SOLUTION
const belowOrEqualToLimit = (a, limit) => Math.max(...a) <= limit;