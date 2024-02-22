/* CHALLENGE DESCRIPTION

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example (Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

/* PREP
PARAMETERS
    // string
    // no leading or trailing spaces
RETURNS
    // return the string with the words in reverse order
EXAMPLES
    // "Do or do not there is no try"
        // "try no is there not do or Do"
    // "The one who wins is the one who thinks she can"
        // "can she thinks who one the is wins who one The"
PSUEDOCODE
    // function that takes one parameter, string
    // turn string into array
    // reverse the array
    // join the strings together
    // return the reversed string
*/

// MY SOLUTION
function reverseWords(str) {
    const arr = str.split(" ");
    return arr.reverse().join(" ");
}

console.log(reverseWords("The greatest victory is that which requires no battle"), "battle no requires which that is victory greatest The");
console.log(reverseWords("Welcome to the show"), "show the to Welcome");
console.log(reverseWords("I love you"), "you love I");

// OTHER SOLUTION
const reverseWords = str => str.split(" ").reverse().join(" ");