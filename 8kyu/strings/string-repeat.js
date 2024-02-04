/* CHALLENGE DESCRIPTION

Write a function that accepts an integer and a string as parameters and returns a string repeated exactly n times.

Examples: (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/


// MY SOLUTION
function repeatStr(n, s) {
    return s.repeat(n);
}

// OTHER SOLUTION
const repeatStr = (n, s) => s.repeat(n);