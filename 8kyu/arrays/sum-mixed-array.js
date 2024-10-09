// CHALLENGE DESCRIPTION
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// MY SOLUTION
function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    return sum;
}

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