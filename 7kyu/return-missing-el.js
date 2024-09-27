/* CHALLNGE DESCRIPTION

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive) and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

/* PREP
Parameters
    // array of integers
    // range from 0 to 9 (inclusive) in no particular order
Returns 
    // return the missing element that's not included in the array
Examples 
    // [0, 5, 1, 3, 2, 9, 7, 6, 4]
        // 8
    //  [9, 2, 4, 5, 7, 0, 8, 6, 1]
        // 3
Pseudocode 
    // function that takes in one parameter, array of integers
    // loop through array from 0 to 9
    // if array does not include i, return i
*/

// MY SOLUTION
function getMissingElement(arr) {
    for (let i = 0; i <= 9; i++) {
        if (!arr.includes(i)) return i;
    }
}

// OTHER SOLUTION
function getMissingElement(arr){
    for (let i = 0; i < 10; i++) {
      if (arr.indexOf(i) === -1) return i;
    }
}