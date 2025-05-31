/* CHALLENGE DESCRIPTION

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: All inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

// MY SOLUTION
const stringToNumber = (str) => {
    return Number(str);
}

console.log(stringToNumber("12"), 12);
console.log(stringToNumber("-1"), -1);
console.log(stringToNumber("0"), 0);

// OTHER SOLUTIONS
const string_ToNumber = str => Number(str);

const stringToNum = str => +str;