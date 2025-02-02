/* CHALLENGE DESCRIPTION

Given the triangle of consecutive odd numbers, calculate the sum of the numbers in the nth row of this triangle (starting at index 1).


             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Examples: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/

// MY SOLUTION
const rowSumOddNumbers = n => n ** 3;

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(5), 125);

// OTHER SOLUTION
const rowSumOddNums = n => Math.pow(n, 3);