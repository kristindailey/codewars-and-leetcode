/* CHALLENGE DESCRIPTION

Write a function which removes all non-digit characters from a string and parse the remaining string to a number (e.g., "hell5o wor6ld" -> 56).

Function:
getNumberFromString(s)
*/

// MY SOLUTION
function getNumberFromString(s) {
    return Number(s.split("").filter(char => !isNaN(char) && char !== " ").join(""));
}

// OTHER SOLUTIONS
function getNumberFromString(s) {
    return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
}

const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""));

function getNumberFromString(s) {
    let result = '';
    const digits = '0123456789';
    for (let i = 0; i < s.length; i++) {
      if (digits.includes(s[i])) {
        result += s[i];
      }
    }
    return Number(result);
}