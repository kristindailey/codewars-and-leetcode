/* CHALLENGE DESCRIPTION

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u) in a given string.

Examples:
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

Don't worry about uppercase vowels.
Y is not considered a vowel for this kata.
*/

// function that takes in one param, str
    // str = don't worry about uppercase letters
// return str minus any vowels
    // y is not a vowel

// MY SOLUTION
    // replace all "a", "e", "i", "o", "u"
    // return the str
const shortcut = str => str.replaceAll("a", "").replaceAll("e", "").replaceAll("i", "").replaceAll("o", "").replaceAll("u", "");

console.log(shortcut("haaaaayy"), "hyy");
console.log(shortcut("hello"), "hll");
console.log(shortcut("HELLO"), "HELLO");
console.log(shortcut("codewars"), "cdwrs");

// OTHER SOLUTIONS
function shortcut(string) {
    const vowels = "aeiou";
    let output = "";
    for (let i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
}

function shortcut(string) {
    return string.split("").filter(letter => !"aeiou".includes(letter)).join("");
}