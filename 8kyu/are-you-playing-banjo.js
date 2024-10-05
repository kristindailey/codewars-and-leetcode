/* CHALLENGE DESCRIPTION

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

/* PREP
Parameters
    // array of integers
Returns 
    // return even elements only
Examples 
    // [1, 2, 3, 4]
        // [2, 4]
    //  [5, 6, 7, 8, 9, 10]
        // [6, 8, 10]
Pseudocode 
    // function that takes in one parameter, array of integers
    // filter the array for even elements only
    // return the array
*/

// MY SOLUTION
function checkPlaysBanjo(str) {
    if (str.startsWith("R") || str.startsWith("r")) return `${str} plays banjo`;
    else return `${str} does not play banjo`;
}


// OTHER SOLUTIONS
function areYouPlayingBanjo(name) {
    return `${name} ${name[0].toLowerCase() === "r" ? "plays" : "does not play"} banjo`;
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") return `${name} plays banjo`;
    else return `${name} does not play banjo`;
}