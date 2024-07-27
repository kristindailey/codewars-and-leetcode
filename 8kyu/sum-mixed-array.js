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
function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x) {
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}

function sumMix(x) {
    return eval(x.join("+"));
}