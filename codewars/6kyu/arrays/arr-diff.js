/* CHALLENGE DESCRIPTION

Your goal in this kata is to implement a difference function which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b, keeping their order.

arrayDiff([1, 2], [1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]
*/

// two arrs
// remove all values from arr1 that also appear in arr2
// return the new array

// MY SOLUTION
function arrDiff(arr1, arr2) {
    return arr1.filter(e => !arr2.includes(e));
}

arrDiff([1, 2], [1]);   // [2]
arrDiff([1, 2, 2, 2, 3], [2]);  // [1, 3]
arrDiff([], []);    // []

// OTHER SOLUTIONS
function arrDiff(arr1, arr2) {
    return arr1.filter(x => arr2.indexOf(x) === -1);
}

function arrDiff(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    return result;
}