/* CHALLENGE DESCRIPTION

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// MY SOLUTION
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
}

console.log(evenOrOdd(0), "Even");
console.log(evenOrOdd(22), "Even");
console.log(evenOrOdd(101), "Odd");

// OTHER SOLUTION
const evenOrOdd = i => i % 2 === 0 ? "Even" : "Odd";