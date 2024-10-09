/* CHALLENGE DESCRIPTION

We need the length of the words separated by a space to be added at the end of that same word and have it returned as an array.

Examples: (Input --> Output)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a string and returns an array with the length of each word added to each element.

Note: String will have at least one element. Words will always be separated by a space.
*/

// MY SOLUTION
const addLength = str => str.split(" ").map(word => word + " " + word.length);

// OTHER SOLUTIONS
const addL = str => str.split(" ").map(word => `${word} ${word.length}`);