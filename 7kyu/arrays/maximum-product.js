/* CHALLENGE DESCRIPTION

Task:
Given an array of integers, find the maximum product obtained from multiplying two adjacent numbers in the array.

Notes:
Array/list size is at least 2.
Array/list numbers could be a mixture of positives, negatives, or zeroes.

Input >> Output Examples:
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50.

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/

/* PREP
Parameters
    // array of integers
    // array.length is >= 2
    // elements in array can be positive, negative, 0
Returns 
    // maximum product of multiplying two adjacent integers in array
Examples 
    // [1, 2, 3, 4]
        // 12 
    //  [5, 6, 7, 8, 9, 10]
        // 90
Pseudocode 
    // function that takes in one parameter, array of integers
    // declare maxProd variable of multiplying two adjacent elements
    // loop through array to find maxProd of two adjacent elements
    // return the maxProd
*/

// MY SOLUTION
function maxProd(arr) {
    let maxProd = arr[0] * arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        maxProd = Math.max(maxProd, arr[i] * arr[i + 1]);
    }
    return maxProd;
}

console.log(maxProd([1, 2, 3, 4]), 12);
console.log(maxProd([5, 6, 7, 8, 9, 10]), 90);

// OTHER SOLUTIONS
function adjacentElementsProduct(array) {
    let newArr = [];
    for(i = 0; i < array.length - 1; i++) {
      newArr.push(array[i] * array[i + 1]);
    }  
    return Math.max(...newArr);
}

function adjacentElementsProduct(a) {
    return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}

function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i) => n * array[i - 1]).slice(1));
}