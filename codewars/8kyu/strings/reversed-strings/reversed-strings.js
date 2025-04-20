/* CHALLENGE DESCRIPTION

Complete the solution so that it reverses the string passed into it.

"world"  =>  "dlrow"
"word"   =>  "drow"
*/

// MY SOLUTION
function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr("world"), "dlrow");
console.log(reverseStr("word"), "drow");
console.log(reverseStr("leon"), "noel");