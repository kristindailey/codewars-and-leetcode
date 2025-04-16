/* CHALLENGE DESCRIPTION

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: The input will never be an empty string.
*/

// MY SOLUTION
function replaceDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] < 5) {
        result += "0";
      } else {
        result += "1";
      }
    }
    return result;
}

console.log(replaceDigits("12345"), "00001");
console.log(replaceDigits("56789"), "11111");
console.log(replaceDigits("0606"), "0101");

// OTHER SOLUTIONS
const fakeBin = x => x.split("").map(n => n < 5 ? 0 : 1).join("");

const fakeBin = x => x.replace(/\d/g, d => d < 5 ? 0 : 1);

function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}