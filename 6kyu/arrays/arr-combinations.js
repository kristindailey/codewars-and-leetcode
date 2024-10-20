/* CHALLENGE DESCRIPTION

In this kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: 
solve([[1, 2],[4],[5, 6]]) = 4
    // Because it results in only 4 possibilites. 
    // They are [1, 4, 5], [1, 4, 6], [2, 4, 5], [2, 4, 6].

Make sure that you don't count duplicates. For example, solve([[1, 2],[4, 4],[5, 6, 6]]) = 4 since the extra outcomes are just duplicates.
*/

// array of arrays
// return num of unique arrays, do not count dupes

// MY SOLUTION -- IN PROGRESS
function returnUniqueArrs(arr) {
    // get rid of dupes using set
    const noDupes = new Set(arr);
    // make a new arr using arr1[0], arr2[0], arr3[0]
    // count sum of unique arrs

}


returnUniqueArrs([1, 3, 4], [4], [1, 3], 6);  
returnUniqueArrs([1, 2], [4, 4], [5, 6, 6], 4)
returnUniqueArrs([1, 2], [5, 5], [6, 7, 7], 4)

// OTHER SOLUTIONS