/* CHALLENGE DESCRIPTION (ARRAY LADDER)

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

/* PREP
Parameters
    // string (two names separated by space)
Returns 
    // string of two capital letters separated by "."
    // string should include first letter of first name and first letter of last name
    // letters may be uppercase or lowercase
Examples 
    // "mister rodgers"
        // "M.R"
    //  "Bugs Bunny"
        // "B.B"
Pseudocode 
    // function that takes a string (name)
    // turn string to uppercase
    // split the string into an array that separates the first name from the last name
    // using template literals, return the first letter of the [0] array element and the first letter of the [1] array element separated by "."
*/

// MY SOLUTION
function abbrevName(name) {  
    let namesArr = name.toUpperCase().split(" ");
    return `${namesArr[0][0]}.${namesArr[1][0]}`;
}

// OTHER SOLUTIONS
function abbrevName(name) {
    return name.split(" ").map(i => i[0].toUpperCase()).join(".");
}

function abbrevName(name) {
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

function abbrevName(name) {
    return `${name[0].toUpperCase()}.${name[name.indexOf(' ') + 1].toUpperCase()}`;
}