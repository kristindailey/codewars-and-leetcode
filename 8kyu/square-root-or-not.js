/* CHALLENGE DESCRIPTION (ARRAY LADDER)

Write a method that will get an integer array as a parameter and will process every number from this array.

Return a new array with processing every number of the input array like this:

If the number has an integer square root, take this. Otherwise, square the number.

Example:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes:
The input array will always contain only positive numbers and will never be empty or null.
*/

/* PREP
Parameters
    // array of integers
    // array will always contain positive integers
    // array will never be empty or null
Returns 
    // return a new array, running a function on each element
    // if element has a square root, return it
    // if element does not have a square root, square the number
Examples 
    // [10, 5, 4, 2, 1]
        // [100, 25, 2, 4, 1]
    //  [25, 49, 64]
        // [5, 7, 8]
Pseudocode 
    // function that takes in one parameter, array of integers
    // check if the square root of each element is a whole number
    // if it's a whole number, push the element to the new array
    // if it's not a whole number, square the element and push to the new array
    // return the new array
*/

// MY SOLUTION
function squareOrSquareRoot(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      let sqrt = Math.sqrt(array[i]);
      if (Number.isInteger(sqrt)) newArr.push(sqrt);
      else (newArr.push(Math.pow(array[i], 2)));
    }
    return newArr;
}
 
// OTHER SOLUTIONS
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

function squareOrSquareRoot(array) {
    return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e * e);  
}