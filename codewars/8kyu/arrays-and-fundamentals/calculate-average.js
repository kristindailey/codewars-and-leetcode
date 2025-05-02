/* CHALLENGE DESCRIPTION

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// function calculating average in list (arr)
// return average, no rounding required
// empty array should return 0

// MY SOLUTION
const calculateAverage = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

console.log(calculateAverage([90, 80, 70]), 80);
console.log(calculateAverage([]), 0);
console.log(calculateAverage([-10, 20, -30]), -6.66666666667);