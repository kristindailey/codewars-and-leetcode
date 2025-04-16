/* CHALLENGE DESCRIPTION

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".

The input will always be valid (i.e., no negative integers).
*/

/* PREP
Parameters
    // non-negative integer
Returns 
    // return string repeating "<integer> sheep..." integer number of times
Examples 
    // 3
        // "1 sheep...2 sheep...3 sheep..."
    //  0
        // ""
    //  1
        // "1 sheep..."
Pseudocode 
    // function that takes in one parameter, non-negative integer
    // declare result variable with empty string
    // loop from 1 to num adding `${i} sheep...` each loop
    // return the result
*/

// MY SOLUTION
function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += `${i} sheep...`;
    }
    return result;
}

console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");

// OTHER SOLUTIONS
const countSheep = num => Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');

const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');