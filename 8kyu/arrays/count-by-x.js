/* CHALLENGE DESCRIPTION

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array.

Examples:
countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5) === [2, 4, 6, 8, 10]
*/

// MY SOLUTION
function countBy(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }

  return result;
}

console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);

// OTHER SOLUTIONS
const countBy = (x, n) => Array.from({length: n},(_,index) => x + index * x);