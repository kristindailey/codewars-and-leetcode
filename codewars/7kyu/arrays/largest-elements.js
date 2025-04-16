/* CHALLENGE DESCRIPTION

Write a program that outputs the top n elements from a list.

Example:
largest(2, [7, 6, 5, 4, 3, 2, 1])
// => [6, 7]
*/

/* PREP
Parameters
    // n for number of largest elements to return
    // array of integers
Returns 
    // return array listing the n number of largest elements
    // return the array in order from smallest to largest
Examples 
    // (2, [7, 6, 5, 4, 3, 2, 1])
        // [6, 7]
    //  (1, [7, 6, 5, 4, 3, 2, 1])
        // [7]
Pseudocode 
    // function that takes in two parameters, array of integers and n for number of elements
    // declare a new array variable
    // loop through array to find the Math.max(...array), removing the largest element each loop
    // loop through the array n number of times
    // push the largest element(s) to the new array
    // return the new array, sorted in numerical order
*/

// MY SOLUTION
function returnLargest(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        let maxEl = Math.max(...arr);
        newArr.push(maxEl);
        arr.splice(arr.indexOf(maxEl), 1);
    }
    return newArr.sort((a, b) => a - b);
}

console.log(returnLargest(2, [7, 6, 5, 4, 3, 2, 1]), [6, 7]);
console.log(returnLargest(1, [7, 6, 5, 4, 3, 2, 1]), [7]);

// OTHER SOLUTIONS
function largest(n, array) {
    return array.sort((a, b) => b - a).slice(0, n).reverse();
}

function largest(n, arr) {
    return n === 0 ? [] : arr.sort((a, b)=> a - b).slice(-n);
}

const largest = (n, arr) => n ? arr.sort((a, b) => a - b).slice(-n) : [];