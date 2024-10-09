// CHALLENGE DESCRIPTION
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: Input will never be an empty string.

// MY SOLUTION
function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        result += "0";
      } else {
        result += "1";
      }
    }
    return result;
}

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