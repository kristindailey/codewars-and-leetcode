/* CHALLENGE DESCRIPTION

Complete the solution so that it returns true if the first argument (string) passed in ends with the second argument (string).

Examples:
solution("abc", "bc") // returns true
solution("abc", "d") // returns false
*/

// function that takes in two params, both str
// return true / false depending on if second string in fact is the end of the first string

// MY SOLUTION
    // check if str1 ends with str2
    // if so, return true
    // else return false
const endsWith = (str1, str2) => str1.endsWith(str2);