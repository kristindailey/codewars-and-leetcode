/* CHALLENGE DESCRIPTION

The first century spans from the year 1 up to and including the year 100, the second century from the year 101 up to and including the year 200, etc.

Given a year, return the century it is in.

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/

// function that takes in a number
// return the century (whole number)

// MY SOLUTION
function calculateCentury(year) {
    return Math.ceil(year / 100);
}

console.log(calculateCentury(1705), 18);
console.log(calculateCentury(1900), 19);
console.log(calculateCentury(1601), 17);

// OTHER SOLUTION
const returnCentury = year => Math.ceil(year / 100);