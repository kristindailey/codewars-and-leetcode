/* CHALLENGE DESCRIPTION

In this simple assignment, you are given a number and have to make it negative. But maybe the number is already negative?

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

// MY SOLUTION
function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return -num;
    }
}

console.log(makeNegative(1), -1);
console.log(makeNegative(-5), -5);
console.log(makeNegative(0), 0);
console.log(makeNegative(0.12), -0.12);

// OTHER SOLUTIONS
const makeNegative = num => num > 0 ? -num : num;

const makeNegative = num => -Math.abs(num);