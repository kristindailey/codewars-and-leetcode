/* CHALLENGE DESCRIPTION

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry. All inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

// MY SOLUTION
const stringToNumber = function(str) {
    return Number(str);
}

// OTHER SOLUTIONS
const string_ToNumber = str => Number(str);

const stringToNum = str => +str;