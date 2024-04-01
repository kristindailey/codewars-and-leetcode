/* CHALLENGE DESCRIPTION

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// MY SOLUTION
function numberToString(num) {
    return num.toString();
}

// OTHER SOLUTION
const numberToString = num => num.toString();

const numberToString = num => String(num);