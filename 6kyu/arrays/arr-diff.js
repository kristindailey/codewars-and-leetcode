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
    // declare result var
    let result = [];
    // loop through arrs
    // if arr1[i] !== arr2[i], add it to the new arr
    for (let i = 0; i < arr1.length; i++ ) {
        if (arr1[i] !== arr2[i]) result.push(i);
    }
    // return the result
    return result;
}

arrDiff([1, 2], [1]);   // [2]
arrDiff([1, 2, 2, 2, 3], [2]);  // [1, 3]
arrDiff([], []);    // []

// OTHER SOLUTIONS