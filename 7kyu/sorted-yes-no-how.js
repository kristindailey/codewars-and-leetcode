/* CHALLENGE DESCRIPTION

Complete the method which accepts an array of integers and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order

"yes, descending" - if the numbers in the array are sorted in a descending order

"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

/* PREP
Parameters
    // array of integers
    // array will always be valid
Returns 
    // return "yes, acending" if sorted in ascending
    // return "yes, descending" if sorted in descending
    // return "no" otherwise
Examples 
    // [1, 2, 3, 4]
        // "yes, ascending"
    //  [10, 9, 8, 7, 6]
        // "yes, descending"
    // [0, 4, 2, 3]
        // "no"
Pseudocode 
    // function that takes in one parameter, array of integers
    // if every element in arr is ascending, return "yes, ascending"
    // if every element in arr is descending, return "yes, descending"
    // if every element in arr is not ascending/descending, return "no"
*/

// MY SOLUTION
function returnSortType(arr) {
    if (arr.every((element, index) => index === 0 || arr[index - 1] <= element)) {
        return "yes, ascending";
    } else if (arr.every((element, index) => index === 0 || arr[index - 1] >= element)) {
        return "yes, descending";
    } else {
        return "no";
    }
}

// OTHER SOLUTIONS
function isSortedAndHow(arr) {
    return arr.every((x, i) => i === 0 || arr[i] >= arr[i - 1]) ? "yes, ascending" :
           arr.every((x, i) => i === 0 || arr[i] <= arr[i - 1]) ? "yes, descending" : "no";
}

const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
    let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;
    return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
}