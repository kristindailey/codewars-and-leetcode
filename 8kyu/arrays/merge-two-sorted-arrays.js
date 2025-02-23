/* CHALLENGE DESCRIPTION

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have the same integers. Remove duplicated integers in the returned result.

Examples: (input -> output)
[1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

// MY SOLUTION
function mergeArrays(arr1, arr2) {
    const mergedArr = [...new Set(arr1.concat(arr2))];
    return mergedArr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]);
console.log(mergeArrays([], []), []);

// OTHER SOLUTIONS
const mergeArrays = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));

const mergeArr = (arr1, arr2) => [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);