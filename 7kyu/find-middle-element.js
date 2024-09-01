/* CHALLENGE DESCRIPTION

Create a function that when provided with a triplet returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example:
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

/* PREP
Parameters
    // array of three numbers
    // each element will always be a distinct number
Returns 
    // return the index of the middle element in the original array
Examples 
    // [2, 7, 9]
        // 1
    //  [15, 100, 20]
        // 2
Pseudocode 
    // function that takes in one parameter, an array/triplet
    // sort a copy of the original array from smallest to largest
    // find the middle element and assign it to a variable
    // return the index of the middle element in the original array
*/

// MY SOLUTION
function gimme(triplet) {
    let sorted = [...triplet].sort((a, b) => a - b);
    let middle = sorted[1];
    return triplet.indexOf(middle);
}

// OTHER SOLUTIONS
const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1]);
}