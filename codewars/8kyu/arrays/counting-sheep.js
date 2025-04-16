/* CHALLENGE DESCRIPTION

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:
const sheep = [true, true, true, false, true, true, true, true, true, false, true, false, true,  false, false, true, true, true, true, true, false, false, true, true];

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined.
*/

// MY SOLUTION
function countSheep(arr) {
    let sheepPresent = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        sheepPresent += 1;
      } 
    }
    return sheepPresent;
}

console.log(countSheep([true, true, true, false, true, true, true, true, true, false, true, false, true,  false, false, true, true, true, true, true, false, false, true, true]), 17);

// OTHER SOLUTIONS
const countSheep = arr => arr.filter(s => s).length;

const countSheep = arr => arr.filter(Boolean).length;