/* CHALLENGE DESCRIPTION

Given a number, return its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
*/

// MY SOLUTION
function returnOppositeNum(number) {
    return -number;
}

console.log(returnOppositeNum(1), -1);
console.log(returnOppositeNum(14), -14);
console.log(returnOppositeNum(-34), 34);

// OTHER SOLUTION
const opposite = number => -number;