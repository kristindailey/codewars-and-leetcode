/* CHALLENGE DESCRIPTION

Write a function that returns a string in which the first name is swapped with the last name.

Example (Input --> Output):
"john McClane" --> "McClane john"
*/

// function that takes in a str
// return str "lastName firstName"

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

// OTHER SOLUTION
const reverseName = str => str.split(" ").reverse().join(" ");