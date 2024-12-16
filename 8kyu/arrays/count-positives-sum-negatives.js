/* CHALLENGE DESCRIPTION

Given an array of integers.

Return an array where the first element is the count of positives numbers and the second element is the sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or null, return an empty array.

Example:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function that takes in arr of ints
// return an arr, first el = count of positive nums, second el = sum of negative nums
// if arr = empty/null, return []

// MY SOLUTION
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    
    let positivesCount = 0;
    let negativesSum = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positivesCount++;
      } else {
        negativesSum += input[i];
      }
    }
    return [positivesCount, negativesSum];
}  

// OTHER SOLUTIONS
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

const countPositivesSumNegatives = input => input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];