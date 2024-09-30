/* CHALLENGE DESCRIPTION

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([1, 1, 1, 2, 1, 1]) === 2
findUniq([0, 0, 0.55, 0, 0]) === 0.55

It’s guaranteed that array contains at least three numbers.

The tests contain some very huge arrays, so think about performance.
*/

/* PREP
Parameters
    // array of integers
    // all nums are equal but one
    // array will contain at least three nums
Returns 
    // return unique element
Examples 
    // [1, 1, 1, 2, 1, 1]
        // 2
    //  [0, 0, 0.55, 0, 0]
        // 0.55
Pseudocode 
    // function that takes in one parameter, an array
    // sort the array, ascending numerical order
    // if first and second elements are the same, return the unique num at the end of the array
    // if first and second elements are not the same, return the unique num at the beginning of the array
*/

// MY SOLUTION
function returnUniqueNum(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]; 
}

// OTHER SOLUTIONS
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr.pop() : arr[0];
}