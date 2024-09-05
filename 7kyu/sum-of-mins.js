/* CHALLENGE DESCRIPTION (ARRAY LADDER)

Given a 2D (nested) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
*/

/* PREP
Parameters
    // array of integers
    // it will be a nested array (array of arrays)
    // arrays will always contain positive values and will never be empty
    // you may have more than 3 nested arrays
Returns 
    // return the sum of the minimum values in each array
Examples 
    // [[1, 2, 3, 4], [2, 3], [8, 9]]
        // 11 (1 + 2 + 8)
    //  [[5, 6, 7, 8, 9, 10], [10, 12], [30, 20]]
        // 45 (5 + 10 + 30)
Pseudocode 
    // function that takes in one parameter, array of integers (nested array)
    // find the minimum value in each row
    // sum all the minimum values
    // return the sum of the minimum values
*/

// MY SOLUTION
function sumOfMinValues(arr) {
    return arr.map(row => Math.min(...row)).reduce((sum, min) => min + sum, 0);
}

// OTHER SOLUTIONS
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}

function sumOfMinimums(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += Math.min(...arr[i]);
    }
    return total;
}