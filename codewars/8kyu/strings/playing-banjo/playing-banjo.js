/* CHALLENGE DESCRIPTION

Write a function which answers the question "Are you playing banjo?"

If your name starts with the letter "R" or lowercase "r," you are playing banjo!

The function takes a name as its only argument and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

/* PREP
Parameters
    // string (name)
    // will always be a valid string
Returns 
    // if name starts with "R" || "r", return "name plays banjo"
    // if name does not start with "R" || "r" return "name does not play banjo"
Examples 
    // "Robin"
        // "Robin plays banjo"
    //  Cadbury
        // "Cadbury does not play banjo"
Pseudocode 
    // function that takes in one parameter, string (name)
    // use the .startsWith() method to determine if str startsWith "R"/"r"
    // if true, use TL to return "str plays banjo"
    // if false, use TL to return "str does not play banjo"
*/

// MY SOLUTION
function checkPlaysBanjo(str) {
    if (str.startsWith("R") || str.startsWith("r")) return `${str} plays banjo`;
    else return `${str} does not play banjo`;
}

console.log(checkPlaysBanjo("Renee"), "Renee plays banjo");
console.log(checkPlaysBanjo("ryan"), "ryan plays banjo");
console.log(checkPlaysBanjo("Cadbury"), "Cadbury does not play banjo");

// OTHER SOLUTIONS
function areYouPlayingBanjo(name) {
    return `${name} ${name[0].toLowerCase() === "r" ? "plays" : "does not play"} banjo`;
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") return `${name} plays banjo`;
    else return `${name} does not play banjo`;
}