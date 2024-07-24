// CHALLENGE DESCRIPTION
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// MY SOLUTION
const findAverage = array => array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;

// OTHER SOLUTIONS
const find_Average = array => array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;