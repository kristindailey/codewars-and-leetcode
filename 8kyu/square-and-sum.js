// CHALLENGE DESCRIPTION
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// MY SOLUTION
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}

// OTHER SOLUTIONS
function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
      return (n * n) + sum;
    }, 0);
}

function squareSum(numbers) {
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}