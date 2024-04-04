/* CHALLENGE DESCRIPTION

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e., it must make the first character in the string uppercase).

The string will always start with a letter and will never be empty.

Examples:
"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
*/

// function that takes one param, str
    // str will never be empty
    // str will always start with a letter
// return str with capped first letter

// MY SOLUTION
function firstCharCapped(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(firstCharCapped("hello"), "Hello");
console.log(firstCharCapped("Hello"), "Hello");
console.log(firstCharCapped("a"), "A");

// OTHER SOLUTIONS
const capitalizeWord = word => word.replace(word.charAt(0), word.charAt(0).toUpperCase());