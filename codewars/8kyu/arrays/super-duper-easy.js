/* CHALLENGE DESCRIPTION

Write a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string, it should return "Error."

*/

// MY SOLUTION
function problem(x) {
    if (typeof x === "string") {
      return "Error";
    } else {
      return (x * 50) + 6;
    }
}

console.log(problem("10"), "Error");
console.log(problem(10), 506);
console.log(problem("Hello"), "Error");
console.log(problem(0), 6);

// OTHER SOLUTIONS
const problem = x => typeof x === "string" ? "Error" : x * 50 + 6;

function problem(x) {
    return typeof x === "number" ? x * 50 + 6 : "Error";
}