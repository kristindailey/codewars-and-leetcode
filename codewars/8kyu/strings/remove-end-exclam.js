/* CHALLENGE DESCRIPTION

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples:
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

// function that takes one param, str
    // input is always a str
    // may or may not have ! in various places
// return str with one ! removed from end of str

// MY SOLUTION
function removeEndExclam(str) {
    // check if str ends with "!"
    // if so, return str minus last char
    // if not, return str
    return str.endsWith("!") ? str.slice(0, -1) : str;
}

console.log(removeEndExclam("Hi!!!"), "Hi!!");
console.log(removeEndExclam("Hi! Hi!"), "Hi! Hi");
console.log(removeEndExclam("!Hi!"), "!Hi");

// OTHER SOLUTION
function remove(s) {
    return s[s.length - 1] === "!" ? s.slice(-1) : s;
}