/* CHALLENGE DESCRIPTION
Complete the method that takes a boolean value and return a "Yes" string for true or a "No" string for false.
*/

// MY SOLUTION
function boolToWord(bool) {
    if (bool) {
      return "Yes";
    } else {
      return "No";
    }
} 

console.log(boolToWord(true));
console.log(boolToWord(false));

// OTHER SOLUTION
const boolToWord = bool => bool ? "Yes" : "No";