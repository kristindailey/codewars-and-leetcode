/* CHALLENGE DESCRIPTION

Given a set of numbers, return the additive inverse of each. Each positive becomes negative, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

You can assume that all values are integers. Do not mutate the input array.
*/

// MY SOLUTION
function invert(array) {
    return array.map(num => -num);
}

// OTHER SOLUTION
const invert = array => array.map(num => -num);