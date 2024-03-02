/* CHALLENGE DESCRIPTION

Your goal is to write a function that removes the first and last characters of a string. 

You're given one parameter: the original string. You don't have to worry about strings with less than two characters.
*/

// MY SOLUTION
function removeFirstAndLastChar(str) {
    return str.slice(1, -1);
}

// OTHER SOLUTION
const removeChar = str => str.slice(1, -1);