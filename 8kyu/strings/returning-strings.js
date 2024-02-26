/* CHALLENGE DESCRIPTION

Write a function that will return a greeting statement that uses an input: your program should return, "Hello, <name>. How are you doing today?"
*/

// MY SOLUTION
function greet(name) {
    return `Hello, ${name}. How are you doing today?`;
}

console.log(greet("Jason"), "Hello, Jason. How are you doing today?");
console.log(greet("Taylor"), "Hello, Taylor. How are you doing today?");
console.log(greet("Erin"), "Hello, Erin. How are you doing today?");

// OTHER SOLUTION
const greet = name => `Hello, ${name}. How are you doing today?`;