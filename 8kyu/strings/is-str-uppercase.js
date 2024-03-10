/* CHALLENGE DESCRIPTION

Write a method to see whether the string is ALL CAPS.

Examples (input -> output):
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter. So any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

/* PREP
Parameters
    // string
Returns
    // return true/false
Examples
    // ""
        // true
    // "abc"
        // false
    // "XYZ"
        // true
Psuedocode
    // declare String constructor function
    // add .isUpperCase method on String prototype
    // if this === this.toUpperCase, return true
    // if this !== this.toUpperCase, return false
*/

// MY SOLUTION
function isUpperCase(str) {
    for (let char of str) {
        if (char >= "a" && char <= "z") return false;
    }
    return true;
}

console.log(isUpperCase(""), true);
console.log(isUpperCase("abc"), false);
console.log(isUpperCase("XYZ"), true);