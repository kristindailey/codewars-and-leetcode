/* CHALLENGE DESCRIPTION

Given an array of integers, return an array where the first element is the count of positives numbers and the second element is the sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or null, return an empty array.

Example:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function that takes in arr of ints
// return an arr, first el = count of positive nums, second el = sum of negative nums
// if arr = empty/null, return []

// MY SOLUTION
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  input.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else {
      negativeSum += num;
    }
  });

  return [positiveCount, negativeSum];
}

// OTHER SOLUTIONS
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

const countPositivesSumNegatives = input => input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];