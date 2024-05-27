/* CHALLENGE DESCRIPTION

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/ 

/* PREP
Parameters
  // array of strings and integers
Returns
  // return sum of array elements, as if they're all integers
Examples
  // ["22", 11, "10"]
    // 43
  // ["0", "1", "0"]
    // 1
  // [1, 2, "3"]
    // 6
Pseudocode
  // function that takes one parameter, array
  // apply reduce method to array
  // turn each element into a number
  // add each element together
  // return the sum
*/

// MY SOLUTION
function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    return sum;
}

console.log(sumMix(["22", 11, "10"]), 43);
console.log(sumMix(["0", "1", "0"]), 1);
console.log(sumMix([1, 2, "3"]), 6);

// OTHER SOLUTIONS
const sumMix = x => x.map(a => +a).reduce((a, b) => a + b, 0);

const sumMix = x => x.reduce((a, b) => Number(a) + Number(b), 0);

function sumMix(x) {
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}

const sumMix = x => eval(x.join("+"));