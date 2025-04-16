/* CHALLENGE DESCRIPTION

You must implement a function that returns the difference between the largest and the smallest value in a given list/array received as the parameter.

Array contains integers and it may contain some negative numbers.

If the array is empty or contains a single element, return 0.

The array is not sorted.

[1, 2, 3, 4]   //  returns 3 because 4 - 1 == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

/* PREP
Parameters
    // array of integers, positive and negative
Returns 
    // return difference of max element minus min element
    // if array.length = 0 or array.length = 1, return 0
Examples 
    // [1, 2, 3, 4]
        // 3
    //  [1, 2, 3, -4]
        // 7
Pseudocode 
    // function that takes in one parameter, array of integers
    // if array.length <= 1, return 0
    // else return the difference of max element minus min element
*/

// MY SOLUTION
const maxDiff = list => list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list); 

console.log(maxDiff([1, 2, 3, 4]), 3);
console.log(maxDiff([1, 2, 3, -4]), 7);

// OTHER SOLUTION
const maxDifference = list => list.length ? Math.max(...list) - Math.min(...list) : 0;