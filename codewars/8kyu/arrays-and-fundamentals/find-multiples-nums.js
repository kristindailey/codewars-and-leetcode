/* CHALLENGE DESCRIPTION

In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value limit. 

If the limit is a multiple of the integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 

The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

// MY SOLUTION
function findMultiples(integer, limit) {
    let result = [];
    for (let i = integer; i <= limit; i += integer) {
      result.push(i);
    }
    return result;
}

console.log(findMultiples(2, 6), [2, 4, 6]);
console.log(findMultiples(4, 16), [4, 8, 12, 16]);

// OTHER SOLUTIONS
const findMultiples = (integer, limit) => Array.from({ length: Math.floor(limit / integer) }, (_, i) => (i + 1) * integer);

const findMultiples = (integer, limit) => [...Array(Math.floor(limit / integer)).keys()].map(i => (i + 1) * integer);