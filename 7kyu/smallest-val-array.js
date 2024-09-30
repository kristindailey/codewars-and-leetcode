/* CHALLENGE DESCRIPTION

Write a function that can return the smallest value of an array or the index of that value. The function's second parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least one number and no duplicates. Assume the second parameter will be a string holding one of two values: "value" or "index."

min([1, 2, 3, 4, 5], "value") // => 1
min([1, 2, 3, 4, 5], "index") // => 0
*/

/* PREP
Parameters
    // array of integers, no duplicates, never empty
    // string determining return of "value" or "index"
Returns 
    // return the smallest element if "value" is specified
    // return the index of the smallest element if "index" is specified
Examples 
    // ([1, 2, 3, 4, 5], "value")
        // 1
    //  ([1, 2, 3, 4, 5], "index")
        // 0
Pseudocode 
    // function that takes in two parameters, (1) array (2) string
    // if str === "value" return Math.min(...arr)
    // if str === "index" return indexof Math.min(...arr)
*/

// MY SOLUTION
function returnSmallestVal(arr, str) {
    if (str === "value") return Math.min(...arr);
    else if (str === "index") return arr.indexOf(Math.min(...arr));
}

// OTHER SOLUTIONS
const min = (arr, toReturn) => toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

function min(arr, toReturn) {
    let val = Math.min.apply(null, arr);
    return toReturn == "value" ? val : arr.indexOf(val);
}