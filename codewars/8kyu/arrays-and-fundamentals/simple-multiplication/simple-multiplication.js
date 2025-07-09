/* CHALLENGE DESCRIPTION

This kata is about multiplying a given number by 8 if it is an even number and by 9 otherwise.

*/

// MY SOLUTION
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}

console.log(simpleMultiplication(2), 16);
console.log(simpleMultiplication(3), 27);
console.log(simpleMultiplication(1), 9);

// OTHER SOLUTION
const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;