/* CHALLENGE DESCRIPTION

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples:
getMiddle("test") should return "es"  
    // length = 4
    // return str[1] and str[2]

getMiddle("testing") should return "t"
    // length = 7
    // return str[3]

getMiddle("middle") should return "dd"
    // length = 6
    // return str[2] and str[3]

getMiddle("A") should return "A"
    // length = 1
    // return str[0]

Input:
A string of length 0 < str < 1000. (In JavaScript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

Output:
The middle character(s) of the word represented as a string.
*/

// function that takes in one param, str
// return middle char
    // if str.length = odd, return middle char
    // if str.length = even, return 2 middle chars

// MY SOLUTION
function returnMiddleChar(str) {
    // determine if str.length = even or odd
    // if even, return str[str.length / 2 - 1] + str[str.length / 2]
    // if odd, return str[Math.floor(str.length / 2)]
    if (str.length % 2 === 0) {
        return str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        return str[Math.floor(str.length / 2)];
    }
}

console.log(returnMiddleChar("test"), "es");
console.log(returnMiddleChar("testing"), "t");
console.log(returnMiddleChar("middle"), "dd");
console.log(returnMiddleChar("A"), "A");

// OTHER SOLUTIONS
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}