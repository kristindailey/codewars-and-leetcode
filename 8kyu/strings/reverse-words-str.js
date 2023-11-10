/* CHALLENGE DESCRIPTION

You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output):
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

// function that takes in a str
    // words are always separated by single space
// return reversed str
    // words are in reverse order
    // chars are not in reverse order
    // keep original capping

// MY SOLUTION
    // make the str an arr - split
    // reverse the arr
    // join the arr
    // return the str
const reverseWords = str => str.split(" ").reverse().join(" ");

console.log(reverseWords("Hello World"), "World Hello");
console.log(reverseWords("Hi There."), "There. Hi");
console.log(reverseWords("Wow. I love it."), "it. love I Wow.");