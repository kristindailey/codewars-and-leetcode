/* CHALLENGE DESCRIPTION
Write a function that returns a string in which firstname is swapped with last name.

Example (Input --> Output):
"john McClane" --> "McClane john"
*/

// function that takes in one param, str
// return reversed str

// MY SOLUTION
function reverseName(str) {
    // turn str to arr - split
    // reverse the arr
    // join string
    // return the str
    return str.split(" ").reverse().join(" ");
}

console.log(reverseName("john McClane"), "McClane john");
console.log(reverseName("kristin Dailey"), "Dailey kristin");
console.log(reverseName("taylor Swift"), "Swift taylor");

// OTHER SOLUTIONS
const reverseName = str => str.split(" ").reverse().join(" ");