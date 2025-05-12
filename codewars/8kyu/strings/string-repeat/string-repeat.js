/* CHALLENGE DESCRIPTION

Write a function that accepts an integer and a string as parameters and returns a string repeated exactly n times.

Examples: (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// MY SOLUTION
function repeatStr(num, str) {
    return str.repeat(num);
}

console.log(repeatStr(6, "I"), "IIIIII");
console.log(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
console.log(repeatStr(0, "Wow"), "Wow");

// OTHER SOLUTION
const repeatStr = (n, s) => s.repeat(n);