/* CHALLENGE DESCRIPTION

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

/* PREP
Parameters
    // string
Returns 
    // return string without any exclamation marks
Examples 
    // "Hello, world!"
        // "Hello, world"
    //  "Wow!! Keep going for it!!!!!"
        // "Wow Keep going for it"
Pseudocode 
    // function that takes in one parameter, string
    // apply method to string to remove all exclamation marks
    // replace ! with "", effectively removing !
    // return new string
*/

// MY SOLUTION
const removeExclamationMarks = s => s.replaceAll("!", "");

// OTHER SOLUTIONS
const removeExclamations = s => s.split("!").join("");