/* CHALLENGE DESCRIPTION

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty, consider it as the following: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// MY SOLUTION
function oddOrEven(arr) {
    if (arr.reduce((a, b) => a + b, 0) % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
}

console.log(oddOrEven([0, 1, 4]), "odd");
console.log(oddOrEven([0, -1, -5]), "even");

// OTHER SOLUTIONS
// const oddOrEven = arr => arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";

// const evenOrOdd = arr => arr.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";