/* CHALLENGE DESCRIPTION

You get an array of numbers. Return the sum of all of the positive ones.

Example: [1, -4, 7, 12] => 1 + 7 + 12 = 20

Note: If there is nothing to sum, the sum should default to 0.
*/

// MY SOLUTION
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// OTHER SOLUTIONS
const positiveSum = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

const positiveSum = arr => arr.filter(num => num > 0).reduce((a, b) => a + b, 0);