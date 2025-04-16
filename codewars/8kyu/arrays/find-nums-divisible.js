/* CHALLENGE DESCRIPTION

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. The first argument is an array of numbers and the second is the divisor.

Example (Input1, Input2 --> Output):
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

// MY SOLUTION
const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([10, 20, 30], 5), [10, 20, 30]);
console.log(divisibleBy([16, 20, 21], 4), [16, 20]);

// OTHER SOLUTION
const divisible_By = (numbers, divisor) => numbers.filter(number => !(number % divisor));