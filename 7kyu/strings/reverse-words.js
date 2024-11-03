/*  CHALLENGE DESCRIPTION

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// function that takes one param, str
// return reversed str, spaces should be retained, caps too

// MY SOLUTION
function reverseStr(str) {
    // convert str to arr - split (by char)
    // reverse arr
    // join the str back together
    // split the str again (by word)
    // reverse the arr
    // join the str back together
    // return the str
    return str 
        .split("")
        .reverse()
        .join("")
        .split(" ")
        .reverse()
        .join(" ");
}

console.log(reverseStr("This is an example!"), "sihT si na !elpmaxe");
console.log(reverseStr("double  spaces"), "elbuod  secaps");
console.log(reverseStr("H e l l O"), "O l l e H");

// OTHER SOLUTIONS
function reverseWords(str) {
    return str.split(" ").map(str => str.split("").reverse().join("")).join(" ");
}

function reverseWords(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}