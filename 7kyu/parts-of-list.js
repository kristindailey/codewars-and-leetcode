/* CHALLENGE DESCRIPTION

Write a function that gives all the ways to divide a list/array of at least two elements into two non-empty parts.

Each two non-empty parts will be in a pair. Each part will be in a string.

Elements of a pair must be in the same order as in the original array.

Example of return:
["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/

/* PREP
Parameters
    // array of strings
Returns 
    // return array of arrays
    // return must have every possible pairing
    // make sure pairings stay in the same order as original array
Examples 
    // ["az", "toto", "picaro", "zone", "kiwi"]
        // [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
    //  ["hello", "and", "welcome", "to", "my", "world"]
        // [["hello", "and welcome to my world"], ["hello, and", "welcome to my world"], ["hello and welcome", "to my world"], ["hello and welcome to", "my world"], ["hello and welcome to my", "world"]]
Pseudocode 
    // function that takes in one parameter, array of strings
    // declare an empty array variable
    // loop through array
    // join the array adding one more element to the array[0] each loop
    // return the new array
*/

// MY SOLUTION
function partList(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let first = arr.slice(0, i).join(" ");
        let second = arr.slice(i).join(" ");
        result.push([first, second]);
    }
    return result;
}

// OTHER SOLUTION
function partlist(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);
}