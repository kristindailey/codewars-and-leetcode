/* CHALLENGE DESCRIPTION

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

/* PREP
Parameters
    // array of integers and length number
    // array will not be empty
    // array will contain at least length number of even numbers
    // account for negative numbers
Returns 
    // return a new array with length of length number
    // return length number of last even numbers in array (in same order as original array)
Examples 
    // ([1, 2, 3, 4], 1)
        // [4]
    //  ([5, 6, 7, 8, 9, 10], 2)
        // [8, 10]
Pseudocode 
    // function that takes in two parameters, array of integers and length number
    // declare new array variable
    // loop through array backwards
    // if element is even, add it to the end of the new array
    // if the new array length === number, stop the loop
    // return the new array
*/

// MY SOLUTION
function evenNumbers(array, number) {
    let newArr = [];  
    for (let i = array.length - 1; i >= 0; i--) {
          if (array[i] % 2 === 0) newArr.unshift(array[i]);
          if (newArr.length === number) break;
    }
    return newArr;
}

// OTHER SOLUTIONS
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

function evenNumbers(array, number) {
    let arr = [];
    for (let i = array.length - 1; number > 0 ; i--) {
      if (array[i] % 2 == 0) {
        arr.push(array[i]);
        number--;
      }
    }
    return arr.reverse();
}