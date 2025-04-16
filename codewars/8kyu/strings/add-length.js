/* CHALLENGE DESCRIPTION

Your task is to write a function that takes a string and returns an array with the length of each word added to each element.

Examples: (Input --> Output)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" --> ["you 3", "will 4", "win 3"]

Note: String will have at least one element. Words will always be separated by a space.
*/

// MY SOLUTION
const addLength = str => str.split(" ").map(word => word + " " + word.length);

console.log(addLength("apple ban"), ["apple 5", "ban 3"]);
console.log(addLength("you will win"), ["you 3", "will 4", "win 3"]);

// OTHER SOLUTION
const addL = str => str.split(" ").map(word => `${word} ${word.length}`);