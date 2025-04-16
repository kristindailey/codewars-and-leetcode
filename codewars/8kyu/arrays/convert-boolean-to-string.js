/* CHALLENGE DESCRIPTION
Complete the method that takes a boolean value and return a "Yes" string for true or a "No" string for false.
*/

// MY SOLUTION
const returnYesOrNo = boolean => boolean ? "Yes" : "No";

console.log(returnYesOrNo(true), "Yes");
console.log(returnYesOrNo(false), "No");

// OTHER SOLUTION
function convertBoolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}