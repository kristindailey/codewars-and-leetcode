/* CHALLENGE DESCRIPTION

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// MY SOLUTION
function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str.charAt(i).repeat(2);
    }
    return result;
}

// OTHER SOLUTIONS
function doubleChar(str) {
    return str.split("").map(x => x + x).join("");
}

function doubleChar(str) {
    return str.replace(/./g, '$&$&');
}

const doubleChar = str => str.split("").map(x => x + x).join("");