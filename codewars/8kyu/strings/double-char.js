/* CHALLENGE DESCRIPTION

Given a string, return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
"String"      -> "SSttrriinngg"
"Hello World" -> "HHeelllloo  WWoorrlldd"
"1234!_ "     -> "11223344!!__  "
*/

// MY SOLUTION
function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str.charAt(i).repeat(2);
    }
    return result;
}

console.log(doubleChar("String"), "SSttrriinngg");
console.log(doubleChar("Hello World"), "HHeelllloo  WWoorrlldd");
console.log(doubleChar("1234!_ "), "11223344!!__  ");

// OTHER SOLUTIONS
const doubleChar = str => str.split("").map(x => x + x).join("");

const doubleChar = str => str.replace(/./g, '$&$&');